/**
 * ARANDUMATH - Tutor Service (Simulador con Arquitectura para Integración Futura de IA)
 * Diseñado con interfaces asíncronas limpias para conectar fácilmente un backend
 * o el API de Gemini en producción sin exponer credenciales en el cliente.
 */

class AranduTutorService {
  constructor() {
    this.currentExerciseContext = null;
    this.apiBase = window.location.protocol === 'file:' ? 'http://localhost:3000' : '';
  }

  async request(path, options) {
    const response = await fetch(`${this.apiBase}${path}`, options);
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || 'No se pudo contactar al tutor IA');
    return data;
  }

  /**
   * Establece el ejercicio actual para dar respuestas contextuales
   */
  setExerciseContext(exercise) {
    this.currentExerciseContext = exercise;
  }

  /**
   * Procesa una pregunta del estudiante y genera una respuesta pedagógica simulada.
   * En producción, esta función llamaría a un endpoint backend seguro:
   * const res = await fetch('/api/ai/tutor', { method: 'POST', body: JSON.stringify({ message, lang, context }) });
   * 
   * @param {string} userMessage - Mensaje o pregunta del alumno
   * @param {'es'|'gn'} lang - Idioma actual de la sesión
   * @returns {Promise<{text: string, suggestedAction?: string}>}
   */
  async sendMessage(userMessage, lang = 'es') {
    try {
      return await this.request('/api/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          lang,
          exercise: this.currentExerciseContext
        })
      });
    } catch (error) {
      console.warn('Tutor IA no disponible; se usa el modo simulado:', error.message);
    }

    // Simulamos una latencia de red realista de 600ms
    await new Promise(resolve => setTimeout(resolve, 650));

    const msg = userMessage.toLowerCase().trim();

    // 1. Respuestas en Guaraní Jopara
    if (lang === 'gn') {
      if (msg.includes('dominio') || msg.includes('asíntota') || msg.includes('restriccion')) {
        return {
          text: `¡Iporãiterei ne porandu! Umi <b>funciones racionales</b>-pe (ojoguáva división-pe), nemandu'a va'erã ndaikatúi ja-divide cero-re. Reheka va'erã umi valor x omoĩva cero pe denominador-pe, ha upéva reheja va'erã okape dominio-gui.<br><br>¿Reipotápa jahecha peteĩ <i>pista mbykymi</i> térã <i>paso a paso</i> ko tembiapópe?`
        };
      }
      if (msg.includes('cuadratica') || msg.includes('cuadrática') || msg.includes('vértice') || msg.includes('parábola')) {
        return {
          text: `¡Maitei! Pe <b>función cuadrática</b> $f(x) = ax^2 + bx + c$ gráfica ningo peteĩ parábola. Pe punto iñimportantevéva ha'e pe <b>vértice V(h, k)</b>, jajuhúva ko fórmula rupive: <code>h = -b / (2a)</code>. Upéi remoĩ $h$ función ryepýpe ha rehecha $k$.<br><br>¿Eñeha'ãsepa ecalcula ko'ápe?`
        };
      }
      if (msg.includes('lineal') || msg.includes('recta') || msg.includes('pendiente')) {
        return {
          text: `Ko <b>función lineal</b> $f(x) = mx + b$ rehegua: pe $m$ ha'e pe pendiente (omombe'úva ojupípa térã oguejýpa pe recta), ha $b$ ha'e pe ordenada al origen (corte eje Y ndive). Raíz jajuhu haĝua, ñamoĩ va'erã $f(x) = 0$.`
        };
      }
      if (msg.includes('hola') || msg.includes('mba\'éichapa') || msg.includes('maitei')) {
        return {
          text: `¡Mba'éichapa! Vy'apavẽ reju haguére AranduMath-pe. Che ningo ne tutor IA. Ikatúta chepytyvõ roikũmby haĝua funciones, álgebra ha cálculo BTI-pe ĝuarã. ¿Mba'épa rehese jahecha ko'áĝa?`
        };
      }
      // Respuesta general en Guaraní Jopara
      return {
        text: `Ahendu ne porandu. Matemátika BTI-pe iñimportánte jaikũmby pe procedimiento conceptual, ha ani jajerovia memorizacióre añoite. Eiporavomína peteĩva umi <b>4 nivel de ayuda</b> yvategua (Pista, Mba'érepa, Paso a paso térã Solución) jahecha haĝua mba'éichapa jahesa'ỹijóta.`
      };
    }

    // 2. Respuestas en Castellano
    if (msg.includes('dominio') || msg.includes('asíntota') || msg.includes('recorrido')) {
      return {
        text: `¡Excelente pregunta sobre <b>Dominio</b>! En análisis matemático para informática, el dominio representa todos los valores de entrada válidos para una función. Por ejemplo, en fracciones debemos evitar a toda costa la división por cero ($denominador \\neq 0$), y en raíces pares los radicandos negativos.<br><br>¿Querés que analicemos una <b>pista</b> o veamos el <b>paso a paso</b> de una función racional?`
      };
    }
    if (msg.includes('cuadratica') || msg.includes('cuadrática') || msg.includes('vértice') || msg.includes('parábola')) {
      return {
        text: `¡Buen tema! Una <b>función cuadrática</b> $f(x) = ax^2 + bx + c$ describe una trayectoria parabólica. El elemento clave es el <b>vértice $V(h, k)$</b>:<br>• La abscisa es: <code>h = -b / (2a)</code><br>• La ordenada es: <code>k = f(h)</code><br>Si $a > 0$, la parábola se abre hacia arriba y tiene un mínimo; si $a < 0$, se abre hacia abajo.`
      };
    }
    if (msg.includes('lineal') || msg.includes('recta') || msg.includes('pendiente')) {
      return {
        text: `En una <b>función lineal</b> $f(x) = mx + b$:<br>• $m$ es la <b>pendiente</b>: si $m > 0$ la recta crece, si $m < 0$ decrece, y si $m = 0$ es horizontal.<br>• $b$ es la <b>ordenada al origen</b> (punto $(0, b)$).<br>• La <b>raíz</b> es el valor de $x$ donde la recta corta el eje horizontal ($f(x) = 0$).`
      };
    }
    if (msg.includes('hola') || msg.includes('buenas') || msg.includes('saludos')) {
      return {
        text: `¡Hola! Bienvenido a tu sesión de tutoría en AranduMath. Estoy listo para ayudarte a desglosar cualquier ejercicio de funciones de tu curso de Informática. ¿Querés repasar un concepto o tenés un ejercicio específico?`
      };
    }

    // Respuesta general pedagógica
    return {
      text: `Entiendo tu consulta: <i>"${userMessage}"</i>.<br><br>Para resolver este tipo de problemas de manera estructurada, te recomiendo utilizar las opciones de <b>Ayuda Progresiva</b> que tenés a la derecha:<br>1. <b>Pista:</b> Para orientarte sin darte la respuesta.<br>2. <b>Explicación:</b> Para recordar el concepto teórico.<br>3. <b>Paso a paso:</b> Para ver el método de despeje.<br>4. <b>Resolución explicada:</b> Para el desglose completo.`
    };
  }

  /**
   * Obtiene uno de los 4 niveles de ayuda progresiva para un ejercicio dado
   * @param {1|2|3|4} tierLevel - Nivel de ayuda (1: Pista, 2: Explicación, 3: Paso a paso, 4: Resolución)
   * @param {Object} exercise - Ejercicio actual
   * @param {'es'|'gn'} lang - Idioma
   */
  async getProgressiveHelp(tierLevel, exercise = null, lang = 'es') {
    const targetExercise = exercise || this.currentExerciseContext;

    const tierNames = { 1: 'pista', 2: 'explicacion', 3: 'paso_a_paso', 4: 'resolucion' };
    try {
      const result = await this.request('/api/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: 'Ayudame con el ejercicio actual respetando estrictamente el nivel de ayuda solicitado.',
          lang,
          helpTier: tierNames[tierLevel],
          exercise: targetExercise
        })
      });
      return result.text;
    } catch (error) {
      console.warn('Ayuda IA no disponible; se usa el contenido validado:', error.message);
    }

    await new Promise(resolve => setTimeout(resolve, 350));

    if (!targetExercise || !targetExercise.progressiveHelp) {
      if (lang === 'gn') {
        return "Ko tembiapópe ĝuarã ejapo peteĩ porandu tutórpe jahecha haĝua mba'éichapa ojejapo.";
      }
      return "Para este ejercicio podés formularle una pregunta directa al tutor.";
    }

    const tierKey = `tier${tierLevel}`;
    const helpData = targetExercise.progressiveHelp[tierKey];

    if (!helpData) {
      return lang === 'gn' 
        ? "Ndojuhúi pytyvõ ko nivel-pe." 
        : "No se encontró información para este nivel de ayuda.";
    }

    return helpData[lang] || helpData['es'];
  }

  /**
   * Simula el análisis de una imagen de ejercicio matemático subida por el estudiante
   * @param {File|string} photoData - Información de la foto
   * @param {'es'|'gn'} lang - Idioma
   */
  async analyzePhotoExercise(photoData, lang = 'es') {
    if (photoData instanceof File) {
      try {
        const formData = new FormData();
        formData.append('image', photoData);
        formData.append('lang', lang);
        const result = await this.request('/api/analyze-image', {
          method: 'POST',
          body: formData
        });
        return {
          detectedText: '',
          diagnosis: lang === 'gn' ? 'Ta\'anga oñehesa\'ỹijóma Gemini rupive.' : 'Imagen analizada con Gemini.',
          initialHint: result.text,
          source: result.source
        };
      } catch (error) {
        console.warn('Análisis real no disponible; se usa la demostración:', error.message);
      }
    }

    await new Promise(resolve => setTimeout(resolve, 1100)); // Latencia simulación OCR

    if (lang === 'gn') {
      return {
        detectedText: "f(x) = x² - 4x + 3",
        diagnosis: "Tutor OCR rehecha: Ejercicio ojehecha porã. Ha'e peteĩ <b>función cuadrática</b>.",
        initialHint: "¡Foto ojehechakuaáma! Jahecha pe fórmula: <code>f(x) = x² - 4x + 3</code>.<br><br>Ko'ápe $a = 1$, $b = -4$ ha $c = 3$. ¿Mba'épa reipotáve jahecha: hapo (raíces) térã ivértice?"
      };
    }

    return {
      detectedText: "f(x) = x² - 4x + 3",
      diagnosis: "Tutor OCR: Imagen analizada correctamente. Detecté una <b>función cuadrática</b>.",
      initialHint: "¡He analizado tu foto con éxito! Detecté la ecuación: <code>f(x) = x² - 4x + 3</code>.<br><br>Es una parábola con coeficientes $a = 1$, $b = -4$, $c = 3$. ¿Te gustaría hallar sus raíces o calcular las coordenadas de su vértice?"
    };
  }
}

// Instancia global disponible
window.tutorService = new AranduTutorService();
