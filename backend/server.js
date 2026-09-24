const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
const express = require('express');
const multer = require('multer');

const app = express();
const port = Number(process.env.PORT || 3000);
const model = process.env.GEMINI_MODEL || 'gemini-3.6-flash';
const apiKey = process.env.GEMINI_API_KEY;
const projectRoot = path.resolve(__dirname, '..');

app.use(express.json({ limit: '1mb' }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 8 * 1024 * 1024 },
  fileFilter: (_req, file, callback) => {
    const allowed = ['image/jpeg', 'image/png', 'image/webp'];
    callback(allowed.includes(file.mimetype) ? null : new Error('Formato de imagen no permitido'), allowed.includes(file.mimetype));
  }
});

function extractGeminiText(data) {
  return data?.candidates?.[0]?.content?.parts
    ?.map(part => part.text || '')
    .join('\n')
    .trim();
}

async function callGemini(parts, systemInstruction) {
  if (!apiKey || apiKey === 'pegue_aqui_su_clave') {
    const error = new Error('La clave de Gemini todavía no está configurada');
    error.status = 503;
    throw error;
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-goog-api-key': apiKey
    },
    body: JSON.stringify({
      system_instruction: { parts: [{ text: systemInstruction }] },
      contents: [{ role: 'user', parts }],
      generationConfig: {
        temperature: 0.25,
        maxOutputTokens: 1200
      }
    })
  });

  const data = await response.json();
  if (!response.ok) {
    const message = data?.error?.message || 'Gemini no pudo procesar la solicitud';
    const error = new Error(message);
    error.status = response.status;
    throw error;
  }

  const text = extractGeminiText(data);
  if (!text) throw new Error('Gemini devolvió una respuesta vacía');
  return text;
}

const tutorInstruction = `
Sos AranduMath, un tutor de Matemática para estudiantes del Bachillerato Técnico en Informática de Paraguay.
Tu alcance principal son funciones, dominio, recorrido, funciones lineales y cuadráticas.
Enseñá con precisión y lenguaje sencillo. No inventes resultados. Verificá mentalmente cada operación.
Si falta información, preguntá antes de asumir. Si no estás seguro, decilo claramente.
Respetá el nivel de ayuda solicitado:
- pista: orientación breve sin revelar la respuesta;
- explicacion: explica el concepto y pregunta al estudiante qué haría;
- paso_a_paso: desarrolla el procedimiento por etapas;
- resolucion: muestra la solución completa y comprobada.
Si el idioma es gn, respondé en guaraní jopara natural y claro. Si es es, respondé en castellano paraguayo.
No reemplazás al docente. No uses scripts ni contenido ejecutable. Podés usar etiquetas simples como <b>, <i>, <code> y <br>.
`;

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, aiConfigured: Boolean(apiKey && apiKey !== 'pegue_aqui_su_clave'), model });
});

app.post('/api/tutor', async (req, res, next) => {
  try {
    const { message, lang = 'es', helpTier = null, exercise = null, studentAnswer = null } = req.body || {};
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Escribí una consulta para el tutor' });
    }

    const prompt = [
      `Idioma: ${lang === 'gn' ? 'guaraní jopara' : 'castellano'}.`,
      `Nivel de ayuda: ${helpTier || 'conversación general'}.`,
      exercise ? `Ejercicio actual: ${JSON.stringify(exercise)}.` : '',
      studentAnswer ? `Respuesta o procedimiento del estudiante: ${studentAnswer}. Analizá dónde se equivocó.` : '',
      `Consulta: ${message}`
    ].filter(Boolean).join('\n');

    const text = await callGemini([{ text: prompt }], tutorInstruction);
    res.json({ text, source: 'gemini' });
  } catch (error) {
    next(error);
  }
});

app.post('/api/analyze-image', upload.single('image'), async (req, res, next) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'Seleccioná una fotografía' });
    const lang = req.body.lang === 'gn' ? 'gn' : 'es';
    const prompt = lang === 'gn'
      ? 'Ehesa\'ỹijo ko ta\'anga. Ehai exactamente pe ejercicio matemático rehecháva, emombe\'u mba\'e tema rehegua ha eporandu pe estudiante-pe añetépa pe texto. Ani eresolve gueteri.'
      : 'Analiza la fotografía. Transcribe exactamente el ejercicio matemático visible, identifica el tema y pide al estudiante que confirme si la interpretación es correcta. Todavía no lo resuelvas.';

    const text = await callGemini([
      { text: prompt },
      { inline_data: { mime_type: req.file.mimetype, data: req.file.buffer.toString('base64') } }
    ], tutorInstruction);

    res.json({ text, fileName: req.file.originalname, source: 'gemini' });
  } catch (error) {
    next(error);
  }
});

app.use('/api', (_req, res) => res.status(404).json({ error: 'Endpoint no encontrado' }));
app.use('/backend', (_req, res) => res.status(404).send('No encontrado'));
app.use(express.static(projectRoot));
app.get('*', (_req, res) => res.sendFile(path.join(projectRoot, 'index.html')));

app.use((error, _req, res, _next) => {
  console.error(error.message);
  const status = error.status || (error instanceof multer.MulterError ? 400 : 500);
  res.status(status).json({ error: error.message || 'Error interno del servidor' });
});

app.listen(port, () => {
  console.log(`AranduMath disponible en http://localhost:${port}`);
  console.log(apiKey ? `Gemini configurado con ${model}` : 'Modo simulado: falta configurar GEMINI_API_KEY');
});
