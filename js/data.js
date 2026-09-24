/**
 * ARANDUMATH - Banco de Datos y Ejercicios Matemáticos
 * Contenidos orientados a Bachillerato Técnico en Informática:
 * Funciones, Álgebra, Análisis Gráfico y Dominio/Recorrido
 * (Estilo limpio sin emojis decorativos)
 */

const EXERCISES_STORAGE_KEY = 'arandumath_custom_exercises';

const INITIAL_EXERCISES = [
  // 1. CONCEPTO DE FUNCIÓN
  {
    id: "func-01",
    topic: "concepto",
    topicName: { es: "Concepto de función", gn: "Función concepto" },
    formula: "R: \\{ (1, 2), (2, 4), (3, 6), (1, 5) \\}",
    question: {
      es: "¿La relación R dada por los pares ordenados representa una función? Justificá tu respuesta.",
      gn: "¿Pe relación R ojehechaukáva umi par ordenado rupive piko peteĩ función? Emombe'umína mba'érepa."
    },
    options: [
      { id: "A", text: { es: "Sí, porque a cada valor de x le corresponde al menos una y.", gn: "Heẽ, cada valor x orekógui por lo menos peteĩ y." }, correct: false },
      { id: "B", text: { es: "No, porque el elemento x = 1 tiene dos imágenes distintas (2 y 5).", gn: "Nahániri, pe elemento x = 1 orekógui mokõi imagen ojoavýva (2 ha 5)." }, correct: true },
      { id: "C", text: { es: "Sí, porque todos los números son enteros positivos.", gn: "Heẽ, opaite umi número entero positivo rupi." }, correct: false },
      { id: "D", text: { es: "No, porque no tiene valores negativos.", gn: "Nahániri, ndorekóigui valor negativo." }, correct: false }
    ],
    graph: {
      type: "relation",
      points: [
        { x: 1, y: 2, label: "(1,2)" },
        { x: 2, y: 4, label: "(2,4)" },
        { x: 3, y: 6, label: "(3,6)" },
        { x: 1, y: 5, label: "(1,5)", highlight: true }
      ],
      verticalLineAt: 1
    },
    progressiveHelp: {
      tier1: {
        es: "<b>Pista:</b> Recordá la regla de oro: para que sea función, a cada valor del dominio (la primera componente x) le debe corresponder <i>un único</i> valor del codominio (y).",
        gn: "<b>Pista mbykymi:</b> Nemandu'áke: oiko haĝua chugui función, peteĩteĩ elemento dominio-pegua (x) oreko va'erã <i>peteĩteĩva</i> imagen (y) añoite."
      },
      tier2: {
        es: "<b>Explicación:</b> Si trazamos una línea vertical en un gráfico o revisamos los pares ordenados, no puede repetirse el primer número con un segundo número diferente.",
        gn: "<b>Mba'érepa:</b> Jahai ramo peteĩ línea vertical plano-pe, térã jahecha umi pares, ndikatúi x ojoavy mokõi y ndive. Pe recta vertical oikytĩ mokõi jave."
      },
      tier3: {
        es: "<b>Paso a paso:</b><br>1. Analicemos el conjunto de partidas: x ∈ {1, 2, 3}.<br>2. Verifiquemos x = 1: se empareja con y = 2 y también con y = 5.<br>3. Al tener dos imágenes diferentes para el mismo valor de entrada, viola la definición formal de función.",
        gn: "<b>Paso a paso:</b><br>1. Jahecha umi entrada: x ∈ {1, 2, 3}.<br>2. Jahecha x = 1: oreko y = 2 ha avei y = 5.<br>3. Oguerekógui mokõi imagen ojoavýva peteĩ entrada añoitépe, ndaha'éi función."
      },
      tier4: {
        es: "<b>Resolución explicada:</b> La respuesta correcta es la <b>B</b>. Por definición matemática, en una función cada elemento del conjunto de partida tiene una sola imagen. Aquí el elemento 1 se relaciona simultáneamente con 2 y con 5, por lo tanto es una relación pero NO una función.",
        gn: "<b>Solución omombe'upáva:</b> Pe respuesta correcta ha'e <b>B</b>. Definición rupi, cada x oreko va'erã peteĩ y añoite. Ko'ápe 1 oho 2 ndive ha 5 ndive avei, upévare ha'e relación pero NDOHÓI función-ramo."
      }
    }
  },

  // 2. FUNCIÓN LINEAL
  {
    id: "func-02",
    topic: "lineal",
    topicName: { es: "Función lineal", gn: "Función lineal" },
    formula: "f(x) = 2x - 4",
    question: {
      es: "Dada la función lineal f(x) = 2x - 4, ¿cuál es su raíz (corte con el eje X) y cuál es su ordenada al origen (corte con el eje Y)?",
      gn: "Ko función lineal f(x) = 2x - 4 reheve, ¿mávapa hapo (corte eje X ndive) ha mávapa pe ordenada al origen (corte eje Y ndive)?"
    },
    options: [
      { id: "A", text: { es: "Raíz: x = 2 ; Ordenada: y = -4", gn: "Hapo: x = 2 ; Ordenada: y = -4" }, correct: true },
      { id: "B", text: { es: "Raíz: x = -2 ; Ordenada: y = 4", gn: "Hapo: x = -2 ; Ordenada: y = 4" }, correct: false },
      { id: "C", text: { es: "Raíz: x = 4 ; Ordenada: y = 2", gn: "Hapo: x = 4 ; Ordenada: y = 2" }, correct: false },
      { id: "D", text: { es: "Raíz: x = 0 ; Ordenada: y = -2", gn: "Hapo: x = 0 ; Ordenada: y = -2" }, correct: false }
    ],
    graph: {
      type: "linear",
      m: 2,
      b: -4,
      root: 2,
      interceptY: -4
    },
    progressiveHelp: {
      tier1: {
        es: "<b>Pista:</b> Para la ordenada al origen, evaluá f(0). Para la raíz, igualá la función a cero: 2x - 4 = 0 y despejá x.",
        gn: "<b>Pista mbykymi:</b> Ordenada al origen reipota ramo, emoĩ x = 0. Hapo (raíz) reipota ramo, embojoja cero ndive: 2x - 4 = 0 ha eipe'a x."
      },
      tier2: {
        es: "<b>Explicación:</b> Toda recta f(x) = mx + b tiene pendiente m = 2 (creciente) y corta al eje vertical Y en el punto (0, b), es decir, b = -4.",
        gn: "<b>Mba'érepa:</b> Opaite recta f(x) = mx + b oreko pendiente m = 2 (ojupi) ha oikytĩ eje Y pe punto (0, b)-pe, ha'éva b = -4."
      },
      tier3: {
        es: "<b>Paso a paso:</b><br>1. <b>Corte con Y (x = 0):</b> f(0) = 2(0) - 4 = -4. Punto: (0, -4).<br>2. <b>Corte con X (f(x) = 0):</b> 2x - 4 = 0.<br>3. Sumamos 4 a ambos lados: 2x = 4.<br>4. Dividimos entre 2: x = 4 / 2 = 2. Punto: (2, 0).",
        gn: "<b>Paso a paso:</b><br>1. <b>Eje Y rehegua (x = 0):</b> f(0) = 2(0) - 4 = -4. Punto: (0, -4).<br>2. <b>Eje X rehegua (f(x) = 0):</b> 2x - 4 = 0.<br>3. Ñamondo 4 ambue yképe: 2x = 4.<br>4. Ñamboja'o 2-pe: x = 4 / 2 = 2. Punto: (2, 0)."
      },
      tier4: {
        es: "<b>Resolución explicada:</b> La opción correcta es la <b>A</b>. La ordenada al origen es el término independiente b = -4 (donde la recta corta verticalmente). La raíz es el valor donde y = 0, resolviendo la ecuación lineal 2x = 4 obtenemos x = 2.",
        gn: "<b>Solución omombe'upáva:</b> Pe opción correcta ha'e <b>A</b>. Pe ordenada al origen ha'e b = -4. Pe raíz ha'e x = 2 jajapóvo 2x - 4 = 0. Upéicha jahecha gráfica-pe avei."
      }
    }
  },

  // 3. FUNCIÓN CUADRÁTICA
  {
    id: "func-03",
    topic: "cuadratica",
    topicName: { es: "Función cuadrática", gn: "Función cuadrática" },
    formula: "f(x) = x^2 - 4x + 3",
    question: {
      es: "¿Cuáles son las coordenadas del vértice V(h, k) de la parábola f(x) = x² - 4x + 3 y hacia dónde se abre?",
      gn: "¿Mba'éichapa pe vértice V(h, k) coordenadas ko parábola f(x) = x² - 4x + 3 rehegua ha mamógotyo pa ojepe'a?"
    },
    options: [
      { id: "A", text: { es: "Vértice: (2, -1) y se abre hacia arriba (cóncava hacia arriba).", gn: "Vértice: (2, -1) ha ojepe'a yvate gotyo (cóncava yvate)." }, correct: true },
      { id: "B", text: { es: "Vértice: (-2, 1) y se abre hacia abajo.", gn: "Vértice: (-2, 1) ha ojepe'a yvýpe gotyo." }, correct: false },
      { id: "C", text: { es: "Vértice: (4, 3) y se abre hacia la derecha.", gn: "Vértice: (4, 3) ha ojepe'a akatúa gotyo." }, correct: false },
      { id: "D", text: { es: "Vértice: (1, 3) y es una recta horizontal.", gn: "Vértice: (1, 3) ha ha'e peteĩ recta." }, correct: false }
    ],
    graph: {
      type: "quadratic",
      a: 1,
      b: -4,
      c: 3,
      vertex: { h: 2, k: -1 },
      roots: [1, 3]
    },
    progressiveHelp: {
      tier1: {
        es: "<b>Pista:</b> La coordenada x del vértice se calcula con la fórmula h = -b / (2a). Además, como a = 1 > 0, la parábola tiene ramas dirigidas hacia arriba.",
        gn: "<b>Pista mbykymi:</b> Pe x vértice rehegua oñenohẽ h = -b / (2a) rupive. Ha a = 1 > 0 rupi, pe parábola ojepe'a yvate gotyo."
      },
      tier2: {
        es: "<b>Explicación:</b> En f(x) = ax² + bx + c identificamos los coeficientes: a = 1, b = -4, c = 3. El signo de 'a' determina la concavidad. El vértice es el punto mínimo de la función cuadrática cuando a > 0.",
        gn: "<b>Mba'érepa:</b> Coeficientekuéra ha'e: a = 1, b = -4, c = 3. Pe signo 'a' omombe'u mañorãpa ojepe'a. Vértice ha'e pe punto imichĩvéva a > 0 jave."
      },
      tier3: {
        es: "<b>Paso a paso:</b><br>1. Calculamos h: h = -(-4) / (2 · 1) = 4 / 2 = 2.<br>2. Calculamos k evaluando f(2): k = (2)² - 4(2) + 3 = 4 - 8 + 3 = -1.<br>3. El vértice es V(2, -1).<br>4. Como a = +1 > 0, las ramas se abren hacia arriba.",
        gn: "<b>Paso a paso:</b><br>1. Jajuhu h: h = -(-4) / (2 · 1) = 4 / 2 = 2.<br>2. Jajuhu k jaipuru f(2): k = (2)² - 4(2) + 3 = 4 - 8 + 3 = -1.<br>3. Pe vértice ha'e V(2, -1).<br>4. a = +1 > 0 rupi, hakã ojepe'a yvate gotyo."
      },
      tier4: {
        es: "<b>Resolución explicada:</b> La opción correcta es <b>A</b>. Con a = 1, b = -4 y c = 3, la coordenada x del vértice es h = -(-4)/2 = 2. Sustituyendo x=2 en la función: f(2) = 4 - 8 + 3 = -1. Por lo tanto el vértice es (2, -1) y al ser el coeficiente cuadrático positivo, la parábola tiene un mínimo y abre hacia arriba.",
        gn: "<b>Solución omombe'upáva:</b> Pe opción correcta ha'e <b>A</b>. Jaipuru h = -b/(2a) = 2, upéi f(2) = -1. Upévare pe vértice opyta (2, -1)-pe ha ojepe'a yvate gotyo."
      }
    }
  },

  // 4. DOMINIO Y RECORRIDO
  {
    id: "func-04",
    topic: "dominio",
    topicName: { es: "Dominio y recorrido", gn: "Dominio ha recorrido" },
    formula: "f(x) = \\frac{5}{x - 3}",
    question: {
      es: "¿Cuál es el dominio real de la función racional f(x) = 5 / (x - 3)?",
      gn: "¿Mba'éichapa pe dominio real ko función racional f(x) = 5 / (x - 3) rehegua?"
    },
    options: [
      { id: "A", text: { es: "Dom(f) = ℝ \\ {3} (Todos los reales excepto el 3)", gn: "Dom(f) = ℝ \\ {3} (Opaite reales menos pe número 3)" }, correct: true },
      { id: "B", text: { es: "Dom(f) = ℝ (Todos los números reales)", gn: "Dom(f) = ℝ (Opaite reales enterovete)" }, correct: false },
      { id: "C", text: { es: "Dom(f) = [3, +∞)", gn: "Dom(f) = [3, +∞)" }, correct: false },
      { id: "D", text: { es: "Dom(f) = ℝ \\ {0, 5}", gn: "Dom(f) = ℝ \\ {0, 5}" }, correct: false }
    ],
    graph: {
      type: "rational",
      asymptoteX: 3,
      numerator: 5
    },
    progressiveHelp: {
      tier1: {
        es: "<b>Pista:</b> En informática y en matemática, la división por cero no está definida. Preguntate: ¿para qué valor de x el denominador se vuelve cero?",
        gn: "<b>Pista mbykymi:</b> Informátikape ha matemátikape ndaikatúi ñamboja'o cero-re. Eporandumi: ¿mba'e valor x rehevépa pe denominador oiko chugui cero?"
      },
      tier2: {
        es: "<b>Explicación:</b> El dominio de una función racional son todos los números reales donde el denominador es distinto de cero: x - 3 ≠ 0.",
        gn: "<b>Mba'érepa:</b> Función racional dominio ha'e opaite número real pe denominador ndaha'éiva cero: x - 3 ≠ 0."
      },
      tier3: {
        es: "<b>Paso a paso:</b><br>1. Planteamos la restricción: denominador ≠ 0.<br>2. x - 3 = 0  =>  x = 3.<br>3. Por lo tanto, x = 3 es una asíntota vertical y no forma parte del dominio.<br>4. El dominio se expresa como: Dom(f) = ℝ - {3}.",
        gn: "<b>Paso a paso:</b><br>1. Jahecha pe restricción: denominador ≠ 0.<br>2. x - 3 = 0 => x = 3.<br>3. Upéva he'ise x = 3 ha'e asíntota vertical ha ndoikéi dominio-pe.<br>4. Dom(f) = ℝ - {3}."
      },
      tier4: {
        es: "<b>Resolución explicada:</b> La opción correcta es <b>A</b>. Dado que no existe la división por cero en los números reales, debemos excluir los valores que anulan el denominador. Al resolver x - 3 = 0 obtenemos x = 3. Por lo tanto, el dominio comprende todos los reales excepto el 3: ℝ \\ {3}.",
        gn: "<b>Solución omombe'upáva:</b> Pe opción correcta ha'e <b>A</b>. Ndaikatúigui ja-divide cero-re, jaheja va'erã okape pe número 3. Upévare dominio ha'e opaite reales menos pe 3: ℝ \\ {3}."
      }
    }
  },

  // 5. IDENTIFICACIÓN GRÁFICA
  {
    id: "func-05",
    topic: "identificar",
    topicName: { es: "Identificación de funciones", gn: "Gráfica jehechakuaa" },
    formula: "f(x) = -x + 2",
    question: {
      es: "¿Qué características corresponden a la gráfica de f(x) = -x + 2?",
      gn: "¿Mba'e característica piko oreko ko gráfica f(x) = -x + 2 rehegua?"
    },
    options: [
      { id: "A", text: { es: "Recta decreciente con corte en el eje Y en (0, 2).", gn: "Recta oguejýva ha oikytĩva eje Y punto (0, 2)-pe." }, correct: true },
      { id: "B", text: { es: "Parábola con ramas hacia abajo.", gn: "Parábola hakã ojepe'áva yvýpe." }, correct: false },
      { id: "C", text: { es: "Recta creciente que pasa por el origen (0, 0).", gn: "Recta ojupíva ohasáva origen (0, 0) rupi." }, correct: false },
      { id: "D", text: { es: "Curva exponencial con asíntota horizontal.", gn: "Curva exponencial asíntota reheve." }, correct: false }
    ],
    graph: {
      type: "linear",
      m: -1,
      b: 2,
      root: 2,
      interceptY: 2
    },
    progressiveHelp: {
      tier1: {
        es: "<b>Pista:</b> Mirá el signo que acompaña a la x: es negativo (-1), por lo tanto a medida que x aumenta, y disminuye.",
        gn: "<b>Pista mbykymi:</b> Ema'ẽmi pe signo x ykére: ha'e negativo (-1), upévare x ojupi jave, y oguejy."
      },
      tier2: {
        es: "<b>Explicación:</b> En f(x) = mx + b, la pendiente es m = -1 < 0 (función decreciente) y el término independiente b = 2 indica el corte con el eje vertical (0, 2).",
        gn: "<b>Mba'érepa:</b> f(x) = mx + b-pe, pe pendiente ha'e m = -1 < 0 (recta oguejýva) ha b = 2 ha'e pe corte eje Y ndive (0, 2)."
      },
      tier3: {
        es: "<b>Paso a paso:</b><br>1. Identificamos el grado: es de grado 1, por lo que es una recta.<br>2. Pendiente m = -1 < 0: la recta desciende de izquierda a derecha.<br>3. Intersección con eje Y: (0, 2).<br>4. Intersección con eje X: 0 = -x + 2 => x = 2.",
        gn: "<b>Paso a paso:</b><br>1. Grado ha'e 1: upévare ha'e recta.<br>2. Pendiente m = -1 < 0: recta oguejy akatúa gotyo.<br>3. Corte eje Y ndive: (0, 2).<br>4. Corte eje X ndive: x = 2."
      },
      tier4: {
        es: "<b>Resolución explicada:</b> La opción correcta es <b>A</b>. Por tratarse de una ecuación lineal de primer grado con pendiente m = -1 negativa, la gráfica es una recta inclinada hacia abajo (decreciente). Además, f(0) = 2 confirma que corta al eje de ordenadas en el punto (0, 2).",
        gn: "<b>Solución omombe'upáva:</b> Pe opción correcta ha'e <b>A</b>. Ha'e recta oguejýva pendiente negativa (-1) rupi, ha oikytĩ eje Y punto (0, 2)-pe f(0) = 2 rupi."
      }
    }
  }
];

// Datos de progreso del estudiante (Simulados para el prototipo)
const STUDENT_PROGRESS_DATA = {
  studentName: "Lucas Benítez",
  course: "3° Bachillerato Técnico en Informática (BTI)",
  totalExercisesCompleted: 24,
  currentLevel: {
    level: 3,
    title: { es: "Nivel 3: Algorítmico", gn: "Nivel 3: Algorítmico" },
    xp: 680,
    nextLevelXp: 1000
  },
  studyStreakDays: 4,
  topicsMastery: [
    {
      id: "concepto",
      name: { es: "Concepto de función", gn: "Función concepto" },
      percentage: 95,
      status: "mastered", // mastered | reinforcement
      exercisesDone: 8
    },
    {
      id: "lineal",
      name: { es: "Función lineal y afín", gn: "Función lineal ha afín" },
      percentage: 88,
      status: "mastered",
      exercisesDone: 7
    },
    {
      id: "cuadratica",
      name: { es: "Función cuadrática (vértice y raíces)", gn: "Función cuadrática" },
      percentage: 62,
      status: "reinforcement",
      exercisesDone: 5
    },
    {
      id: "dominio",
      name: { es: "Dominio y restricciones algebraicas", gn: "Dominio ha restricciones" },
      percentage: 45,
      status: "reinforcement",
      exercisesDone: 4
    }
  ]
};

// Datos para el portal de profesores (Simulados)
const TEACHER_STUDENTS_DATA = [
  { id: 1, name: "Lucas Benítez", completed: 24, mastery: "82%", status: "Óptimo", needHelp: "Dominio y recorrido" },
  { id: 2, name: "María Elena González", completed: 28, mastery: "91%", status: "Excelente", needHelp: "Ninguno" },
  { id: 3, name: "Rodrigo Caballero", completed: 14, mastery: "54%", status: "Requiere apoyo", needHelp: "Función cuadrática" },
  { id: 4, name: "Sofía Arzamendia", completed: 22, mastery: "79%", status: "Bueno", needHelp: "Dominio racional" },
  { id: 5, name: "Christian Domínguez", completed: 18, mastery: "68%", status: "En progreso", needHelp: "Gráficas lineales" }
];

/**
 * Obtiene la lista completa de ejercicios (incluyendo los personalizados creados por docentes)
 */
function getAllExercises() {
  const custom = localStorage.getItem(EXERCISES_STORAGE_KEY);
  if (custom) {
    try {
      const parsed = JSON.parse(custom);
      return [...INITIAL_EXERCISES, ...parsed];
    } catch (e) {
      console.error("Error parsing custom exercises", e);
    }
  }
  return INITIAL_EXERCISES;
}

/**
 * Guarda un nuevo ejercicio creado por un docente
 * @param {Object} exercise 
 */
function saveCustomExercise(exercise) {
  const custom = localStorage.getItem(EXERCISES_STORAGE_KEY);
  let list = [];
  if (custom) {
    try {
      list = JSON.parse(custom);
    } catch (e) {
      list = [];
    }
  }
  list.push(exercise);
  localStorage.setItem(EXERCISES_STORAGE_KEY, JSON.stringify(list));
}
