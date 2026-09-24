/**
 * ARANDUMATH - Sistema de Internacionalización (i18n)
 * Soporte Bilingüe: Castellano (es) y Guaraní Jopara (gn)
 */

const I18N_STORAGE_KEY = 'arandumath_lang';

const translations = {
  es: {
    // Generales
    brandName: "AranduMath",
    brandSubtitle: "Bachillerato Técnico en Informática",
    langNameEs: "Castellano",
    langNameGn: "Guaraní Jopara",
    switchLanguage: "Cambiar idioma",
    backToHome: "Volver al inicio",
    startBtn: "Comenzar",
    teacherArea: "Área de Docentes",
    studentArea: "Área del Estudiante",
    checkAnswer: "Comprobar",
    nextExercise: "Siguiente ejercicio",
    similarExercise: "Ejercicio similar",
    helpBtn: "Necesito ayuda",
    closeBtn: "Cerrar",
    saveBtn: "Guardar",
    cancelBtn: "Cancelar",
    onlineStatus: "En línea",

    // Welcome Screen
    heroPill: "Matemática para Bachillerato Técnico en Informática",
    heroTitle: "Aprendé Matemática <span class='gradient-text'>a tu manera.</span>",
    heroSubtitle: "Tu tutor inteligente con IA que te acompaña paso a paso. No te damos solo la respuesta: te ayudamos a comprender el porqué de cada procedimiento.",
    feature1Title: "Tutor con IA Paciente",
    feature1Desc: "Hacé preguntas, escribí dudas o subí una foto de tu cuaderno. El tutor te guía sin juzgarte.",
    feature2Title: "Ayuda Progresiva en 4 Niveles",
    feature2Desc: "Elegí cuánta ayuda necesitás: desde una pequeña pista hasta la resolución completa explicada.",
    feature3Title: "Práctica Interactiva",
    feature3Desc: "Ejercicios visuales sobre funciones lineales, cuadráticas y dominio con gráficas en tiempo real.",

    // Language Screen
    langSelectTitle: "Elegí el idioma de tu sesión",
    langSelectSubtitle: "Podés cambiarlo en cualquier momento desde el menú. AranduMath se adapta a tu forma natural de comunicarte.",
    langEsTitle: "Castellano",
    langEsDesc: "Español claro, dinámico y enfocado en la terminología técnica y curricular del BTI.",
    langEsSample: "Tutor: '¡Hola! Vamos a analizar esta función cuadrática paso a paso.'",
    langGnTitle: "Guaraní Jopara",
    langGnDesc: "Bilingüe Jopara auténtico, natural y cercano. Explicaciones pedagógicas que combinan lo técnico con nuestra identidad.",
    langGnSample: "Tutor: '¡Mba'éichapa! Jahechamína ko función cuadrática mba'éichapa oiko paso a paso.'",
    langContinueBtn: "Continuar a mi panel",

    // Dashboard
    dashGreeting: "¡Hola de nuevo, Estudiante!",
    dashMotivation: "¿Qué vamos a comprender hoy en AranduMath?",
    statCompleted: "Ejercicios resueltos",
    statLevel: "Nivel de práctica",
    statStreak: "Racha de estudio",
    levelValue: "Nivel 3: Algorítmico",
    streakValue: "4 días seguidos",

    // Dashboard Cards
    cardTutorTitle: "Tutor de Matemática",
    cardTutorDesc: "Conversá con el tutor de IA. Planteá dudas de clase o conceptos difíciles.",
    cardTutorAction: "Abrir tutor",

    cardUploadTitle: "Subir ejercicio",
    cardUploadDesc: "Tomá o subí una foto de tu ejercicio del cuaderno o pizarrón para analizarlo.",
    cardUploadAction: "Subir foto",

    cardPracticeTitle: "Practicar funciones",
    cardPracticeDesc: "Desafíos sobre función lineal, cuadrática, dominio, recorrido y gráficas.",
    cardPracticeAction: "Empezar práctica",

    cardProgressTitle: "Mi progreso",
    cardProgressDesc: "Visualizá tus temas dominados y aquellos que necesitan refuerzo.",
    cardProgressAction: "Ver estadísticas",

    cardLangTitle: "Cambiar idioma",
    cardLangDesc: "Alterná entre Castellano y Guaraní Jopara para toda la interfaz y el tutor.",
    cardLangAction: "Configurar idioma",

    // AI Tutor Screen
    tutorTitle: "Tutor AranduMath",
    tutorSubtitle: "Orientado a Bachillerato Técnico en Informática",
    tutorWelcomeMsg: "¡Hola! Soy tu tutor de AranduMath. Podés escribir tu consulta, elegir un tema o subir una foto de tu ejercicio. ¿En qué problema de funciones querés que trabajemos hoy?",
    tutorInputPlaceholder: "Escribí tu pregunta de matemática aquí...",
    tutorSendBtn: "Enviar",
    uploadBoxTitle: "Subir foto de ejercicio",
    uploadBoxDrop: "Arrastrá una foto aquí o hacé clic para seleccionar",
    uploadBoxFormats: "Formatos JPG, PNG (Simulación de reconocimiento OCR)",
    helpTiersTitle: "Niveles de Ayuda Progresiva",
    helpTiersSubtitle: "Elegí el nivel de guía que necesitás:",
    
    // 4 Help Tiers
    tier1Name: "Pista",
    tier1Tag: "Nivel 1",
    tier1Desc: "Un indicio clave sin resolver el ejercicio.",
    tier2Name: "Explicación",
    tier2Tag: "Nivel 2",
    tier2Desc: "Concepto o fórmula matemática detrás del paso.",
    tier3Name: "Paso a paso",
    tier3Tag: "Nivel 3",
    tier3Desc: "Procedimiento detallado paso por paso.",
    tier4Name: "Resolución explicada",
    tier4Tag: "Nivel 4",
    tier4Desc: "Solución completa fundamentando cada decisión.",

    // Practice Screen
    practiceTitle: "Laboratorio de Práctica: Funciones",
    practiceSubtitle: "Bachillerato Técnico en Informática - 3° Curso",
    topicConcepto: "Concepto de función",
    topicLineal: "Función lineal",
    topicCuadratica: "Función cuadrática",
    topicDominio: "Dominio y recorrido",
    topicIdentificar: "Identificación gráfica",
    graphLabel: "Plano Cartesiano Interactivo",
    solutionLabel: "Explicación detallada:",
    tryAgain: "Volver a intentar",

    // Progress Screen
    progressTitle: "Mi Progreso de Aprendizaje",
    progressSubtitle: "Competencias matemáticas alcanzadas y recomendaciones personalizadas",
    masteredTopics: "Temas Dominados",
    reinforceTopics: "Temas que necesitan refuerzo",
    reinforceBtn: "Reforzar ahora",
    weeklyGoal: "Meta semanal completada",

    // Teacher Area
    teacherTitle: "Portal Docente AranduMath",
    teacherSubtitle: "Gestión de ejercicios y seguimiento del 3° Año BTI",
    newExerciseTab: "Crear Nuevo Ejercicio",
    studentsTab: "Rendimiento del Curso",
    exerciseTopicLabel: "Tema de la unidad",
    exerciseTitleLabel: "Título o identificador",
    exerciseStatementLabel: "Enunciado del ejercicio",
    exerciseExpectedLabel: "Respuesta correcta esperada",
    exerciseHintLabel: "Pista pedagógica (Nivel 1)",
    exerciseExplanationLabel: "Explicación conceptual (Nivel 2)",
    exerciseStepLabel: "Procedimiento paso a paso (Nivel 3)",
    studentListTitle: "Monitoreo de Alumnos - 3° Informática",
    studentColName: "Estudiante",
    studentColCompleted: "Ejercicios",
    studentColMastery: "Nivel de Dominio",
    studentColStatus: "Estado / Recomendación"
  },

  gn: {
    // Generales
    brandName: "AranduMath",
    brandSubtitle: "Bachillerato Técnico Informátikape",
    langNameEs: "Castellano",
    langNameGn: "Guaraní Jopara",
    switchLanguage: "Emoambue ñe'ẽ",
    backToHome: "Ejevy ñepyrũhápe",
    startBtn: "Eñepyrũ ko'ápe",
    teacherArea: "Mbo'eharakuéra Renda",
    studentArea: "Temimbo'e Renda",
    checkAnswer: "Ehechami oĩ porãpa",
    nextExercise: "Ambue tembiapo",
    similarExercise: "Tembiapo ojoguáva",
    helpBtn: "Aikotevẽ pytyvõ",
    closeBtn: "Emboty",
    saveBtn: "Eñongatu",
    cancelBtn: "Eheja",
    onlineStatus: "Oĩma konektádo",

    // Welcome Screen
    heroPill: "Matemátika Bachillerato Técnico Informátikape ĝuarã",
    heroTitle: "Eikuaave Matemátika <span class='gradient-text'>nde rekópe.</span>",
    heroSubtitle: "Ne tutor IA ne pytyvõta paso a paso. Na ome'ẽmo'ãi ndéve la respuesta año: ne pytyvõta reikũmby haĝua mba'érepa ojejapo péicha.",
    feature1Title: "Tutor IA ne Pytyvõva",
    feature1Desc: "Eporandu, ehai ne duda térã ehupi ne cuaderno ra'anga. Ko tutor ndaija'éi nderehe, nembo'éta py'aguapýpe.",
    feature2Title: "4 Nivel de Pytyvõ Progresiva",
    feature2Desc: "Eiporavo mboy pytyvõpa reikotevẽ: peteĩ pista mbykymígui guive resolución completa peve.",
    feature3Title: "Ñeha'ã ha Ñembokatupyry",
    feature3Desc: "Tembiapo visual función lineal, cuadrática ha dominio rehegua gráfico reheve en vivo.",

    // Language Screen
    langSelectTitle: "Eiporavo ne ñe'ẽ ko sesióndo ĝuarã",
    langSelectSubtitle: "Ikatúta remoambue oimeraẽ jave menúgui. AranduMath oikũmby mba'éichapa reñe'ẽse.",
    langEsTitle: "Castellano",
    langEsDesc: "Español hesakãva, técnico ha curricular BTI-pe ĝuarã.",
    langEsSample: "Tutor: '¡Hola! Vamos a analizar esta función cuadrática paso a paso.'",
    langGnTitle: "Guaraní Jopara",
    langGnDesc: "Ñane ñe'ẽ Jopara tee, tekoha ha mbo'ehaópe jaipurúva. Omoirũ umi término técnico ñane identidad ndive.",
    langGnSample: "Tutor: '¡Mba'éichapa! Jahechamína ko función cuadrática mba'éichapa oiko paso a paso.'",
    langContinueBtn: "Ahasa che panel-pe",

    // Dashboard
    dashGreeting: "¡Mba'éichapa, Temimbo'e!",
    dashMotivation: "¿Mba'épa jahesa'ỹijota ko árape AranduMath ndive?",
    statCompleted: "Tembiapo ojejapopáva",
    statLevel: "Nivel de práctica",
    statStreak: "Día seguido reñembokatupyrýva",
    levelValue: "Nivel 3: Algorítmico",
    streakValue: "4 ára segído",

    // Dashboard Cards
    cardTutorTitle: "Matemátika Tutor IA",
    cardTutorDesc: "Eñemongeta ne tutor ndive. Eporandu umi tema hasýva mbo'ehaogui.",
    cardTutorAction: "Eike tutor ndive",

    cardUploadTitle: "Ehupi ne rembiapo",
    cardUploadDesc: "Eñohẽ foto ne cuaderno térã pizarrongui jahesa'ỹijo haĝua.",
    cardUploadAction: "Ehupi foto",

    cardPracticeTitle: "Epraktika funciones",
    cardPracticeDesc: "Desafío función lineal, cuadrática, dominio ha gráfica rehegua.",
    cardPracticeAction: "Eñepyrũ epraktika",

    cardProgressTitle: "Che progreso",
    cardProgressDesc: "Ehecha umi tema reikuaapámava ha umi reikotevẽva remombareteve.",
    cardProgressAction: "Ehecha estadístika",

    cardLangTitle: "Emoambue ñe'ẽ",
    cardLangDesc: "Eiporavo Castellano térã Guaraní Jopara opaite aplicación ha tutórpe ĝuarã.",
    cardLangAction: "Econfigura ñe'ẽ",

    // AI Tutor Screen
    tutorTitle: "Tutor AranduMath",
    tutorSubtitle: "Bachillerato Técnico Informátikape ĝuarã",
    tutorWelcomeMsg: "¡Mba'éichapa! Che ningo ne tutor AranduMath. Ikatúta rehai ne porandu, eiporavo peteĩ tema térã ehupi ne rembiapo ra'anga. ¿Mba'e función rehepa jañepyrũta ko'ápe?",
    tutorInputPlaceholder: "Ehai ne porandu matemátika rehegua ko'ápe...",
    tutorSendBtn: "Emondo",
    uploadBoxTitle: "Ehupi foto ne tembiapógui",
    uploadBoxDrop: "Emondo ne foto ko'ápe térã eklik eiporavo haĝua",
    uploadBoxFormats: "Formatos JPG, PNG (OCR reconocimiento simulación)",
    helpTiersTitle: "Niveles de Pytyvõ Progresiva",
    helpTiersSubtitle: "Eiporavo mboy pytyvõpa reikotevẽ:",

    // 4 Help Tiers
    tier1Name: "Pista mbykymi",
    tier1Tag: "Nivel 1",
    tier1Desc: "Peteĩ indicio michĩmi nande jokoiete haĝua.",
    tier2Name: "Mba'érepa (Explicación)",
    tier2Tag: "Nivel 2",
    tier2Desc: "Fórmula ha concepto oĩva ko paso rapykuéri.",
    tier3Name: "Paso a paso",
    tier3Tag: "Nivel 3",
    tier3Desc: "Peteĩteĩ umi mba'e ojejapóva oñondivepa.",
    tier4Name: "Solución omombe'upáva",
    tier4Tag: "Nivel 4",
    tier4Desc: "Resolución completa omyesakãva mba'érepa ojejapo péicha.",

    // Practice Screen
    practiceTitle: "Ñembokatupyry Renda: Funciones",
    practiceSubtitle: "Bachillerato Técnico Informátikape - 3° Curso",
    topicConcepto: "Función concepto",
    topicLineal: "Función lineal",
    topicCuadratica: "Función cuadrática",
    topicDominio: "Dominio ha recorrido",
    topicIdentificar: "Gráfica jehechakuaa",
    graphLabel: "Plano Cartesiano Interactivo",
    solutionLabel: "Explicación hesakãva:",
    tryAgain: "Eñeha'ã jeyna",

    // Progress Screen
    progressTitle: "Che Progreso Ñemoarandúpe",
    progressSubtitle: "Umi tema reikuaapámava ha recomendación ne pytyvõtava",
    masteredTopics: "Temas Reikuaapámava",
    reinforceTopics: "Temas Reikotevẽva Remombarete",
    reinforceBtn: "Emombarete ko'ápe",
    weeklyGoal: "Meta semanal oñemohu'ãva",

    // Teacher Area
    teacherTitle: "Mbo'ehára Portal AranduMath",
    teacherSubtitle: "Tembiapo apo ha seguimiento 3° Año BTI-pe",
    newExerciseTab: "Emoheñói Tembiapo Pyahu",
    studentsTab: "Temimbo'ekuéra Rendimiento",
    exerciseTopicLabel: "Unidad rehegua",
    exerciseTitleLabel: "Téra térã identificador",
    exerciseStatementLabel: "Tembiapo enunciado",
    exerciseExpectedLabel: "Respuesta oñeha'arõva",
    exerciseHintLabel: "Pista pedagógica (Nivel 1)",
    exerciseExplanationLabel: "Explicación conceptual (Nivel 2)",
    exerciseStepLabel: "Paso a paso procedimiento (Nivel 3)",
    studentListTitle: "Temimbo'ekuéra Jesareko - 3° Informática",
    studentColName: "Temimbo'e",
    studentColCompleted: "Tembiapokuéra",
    studentColMastery: "Nivel de Dominio",
    studentColStatus: "Estado / Recomendación"
  }
};

/**
 * Obtiene el idioma actual almacenado en localStorage, por defecto 'es'
 */
function getCurrentLang() {
  const stored = localStorage.getItem(I18N_STORAGE_KEY);
  if (stored && (stored === 'es' || stored === 'gn')) {
    return stored;
  }
  return 'es';
}

/**
 * Establece el idioma activo y lo persiste en localStorage
 * @param {'es'|'gn'} lang 
 */
function setLanguage(lang) {
  if (lang !== 'es' && lang !== 'gn') return;
  localStorage.setItem(I18N_STORAGE_KEY, lang);
  applyTranslations();
  updateLangIndicator();
}

/**
 * Traduce una clave en el idioma activo
 * @param {string} key 
 * @returns {string}
 */
function t(key) {
  const lang = getCurrentLang();
  if (translations[lang] && translations[lang][key]) {
    return translations[lang][key];
  }
  if (translations['es'] && translations['es'][key]) {
    return translations['es'][key];
  }
  return key;
}

/**
 * Aplica las traducciones a todos los elementos del DOM con el atributo [data-i18n]
 */
function applyTranslations() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      if (el.getAttribute('placeholder')) {
        el.setAttribute('placeholder', translation);
      }
    } else {
      el.innerHTML = translation;
    }
  });

  const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
  placeholders.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.setAttribute('placeholder', t(key));
  });

  const titles = document.querySelectorAll('[data-i18n-title]');
  titles.forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    el.setAttribute('title', t(key));
  });
}

/**
 * Actualiza el indicador visual del idioma en la barra de navegación
 */
function updateLangIndicator() {
  const current = getCurrentLang();
  const label = current === 'gn' ? 'Guaraní' : 'Castellano';
  const badges = document.querySelectorAll('.lang-current-label');
  badges.forEach(b => {
    b.textContent = label;
  });
}

// Inicialización automática cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  updateLangIndicator();
});
