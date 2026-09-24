# AranduMath

Prototipo educativo de Matemática con tutor en castellano y guaraní jopara.

## Ejecutar sin IA

Podés abrir `index.html` directamente. El tutor conservará el modo simulado y el progreso real se guardará en el navegador.

## Ejecutar con Gemini

1. Instalá Node.js 18 o superior.
2. Abrí una terminal dentro de la carpeta `backend`.
3. Ejecutá `npm install`.
4. Copiá `.env.example` y renombrá la copia como `.env`.
5. Pegá tu clave de Google AI Studio en `GEMINI_API_KEY`.
6. Ejecutá `npm start`.
7. Abrí `http://localhost:3000`.

Nunca subas `backend/.env` a GitHub ni escribas la clave en archivos del frontend.

## Funciones implementadas

- Navegación completa entre las pantallas.
- Castellano y guaraní jopara.
- Banco de ejercicios y cuatro niveles de ayuda.
- Progreso real guardado en `localStorage`.
- Tutor Gemini mediante backend seguro.
- Análisis de fotografías con Gemini.
- Modo simulado automático si el backend o la clave no están disponibles.
