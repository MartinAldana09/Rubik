/* ============================================================
   CONTENIDO DEL TUTORIAL — MULTI-CUBO
   ============================================================
   Acá vive TODO el contenido del sitio. No hace falta tocar
   HTML ni CSS para agregar un cubo nuevo o editar uno existente.

   ESTRUCTURA:
   CUBES es una lista de cubos. Cada cubo tiene:
     - id:          identificador único, sin espacios (ej "3x3")
     - nombre:      nombre que se muestra (ej "Cubo 3×3")
     - dificultad:  texto corto ("Principiante", "Intermedio", "Avanzado")
     - color:       "white" | "yellow" | "red" | "orange" | "blue" | "green"
                     (define el color de acento de la tarjeta del menú)
     - resumen:     descripción corta para la tarjeta del menú
     - steps:       lista de pasos del tutorial (mismo formato de antes)

   ------------------------------------------------------------
   CÓMO AGREGAR UN CUBO NUEVO:
   1. Copiá un bloque { id: "...", nombre: "...", ... } completo,
      desde la llave { hasta la } que lo cierra.
   2. Pegalo antes del cierre de la lista CUBES (antes del ]; final).
   3. Cambiá id, nombre, dificultad, color, resumen.
   4. Dentro de "steps", agregá o editá los pasos con tus propios
      videos, fotos, descripciones y algoritmos.
   5. Guardá y subí el cambio a GitHub.
   ============================================================ */

const CUBES = [

  /* ============================================================
     1) CUBO 3×3 — método por capas
     ============================================================ */
  {
    id: "3x3",
    nombre: "Cubo 3×3",
    dificultad: "Principiante",
    color: "red",
    resumen: "El clásico. Método por capas en 6 pasos.",
    steps: [
      {
        id: "3x3-cruz-blanca",
        numero: "01",
        color: "white",
        facePattern: [4,1,3,5,7],
        titulo: "La cruz blanca",
        subtitulo: "Cara: blanco",
        descripcion:
          "Formá una cruz de color blanco en una cara, haciendo coincidir " +
          "los colores laterales de cada arista con el centro de su cara " +
          "correspondiente. Es la base de todo el método por capas.",
        video: { tipo: "youtube", id: "TU_ID_DE_YOUTUBE_1" },
        imagenes: ["assets/img/3x3-paso1-a.jpg", "assets/img/3x3-paso1-b.jpg"],
        algoritmos: [],
      },
      {
        id: "3x3-esquinas-primera-capa",
        numero: "02",
        color: "white",
        facePattern: [0,2,4,6,8],
        titulo: "Esquinas de la primera capa",
        subtitulo: "Cara: blanco",
        descripcion:
          "Ubicá las cuatro esquinas blancas debajo de su posición final y " +
          "usá el algoritmo del 'tirabuzón' para insertarlas sin desarmar " +
          "la cruz.",
        video: { tipo: "youtube", id: "TU_ID_DE_YOUTUBE_2" },
        imagenes: ["assets/img/3x3-paso2-a.jpg"],
        algoritmos: [{ nombre: "Insertar esquina", notacion: "R U R' U'" }],
      },
      {
        id: "3x3-segunda-capa",
        numero: "03",
        color: "green",
        facePattern: [1,3,4,5,7],
        titulo: "Segunda capa (aristas)",
        subtitulo: "Cara: lateral",
        descripcion:
          "Con la primera capa resuelta, insertá las cuatro aristas de la " +
          "capa del medio usando el algoritmo de mano derecha o mano " +
          "izquierda según hacia dónde deba ir la pieza.",
        video: { tipo: "youtube", id: "TU_ID_DE_YOUTUBE_3" },
        imagenes: ["assets/img/3x3-paso3-a.jpg", "assets/img/3x3-paso3-b.jpg"],
        algoritmos: [
          { nombre: "Arista a la derecha", notacion: "U R U' R' U' F' U F" },
          { nombre: "Arista a la izquierda", notacion: "U' L' U L U F U' F'" },
        ],
      },
      {
        id: "3x3-cruz-amarilla",
        numero: "04",
        color: "yellow",
        facePattern: [4,1,3,5,7],
        titulo: "Cruz amarilla (OLL - aristas)",
        subtitulo: "Cara: amarillo",
        descripcion:
          "Orientá las aristas de la última capa para formar una cruz " +
          "amarilla arriba, sin importar todavía si los colores laterales " +
          "coinciden.",
        video: { tipo: "youtube", id: "TU_ID_DE_YOUTUBE_4" },
        imagenes: ["assets/img/3x3-paso4-a.jpg"],
        algoritmos: [{ nombre: "Formar la cruz", notacion: "F R U R' U' F'" }],
      },
      {
        id: "3x3-orientar-ultima-capa",
        numero: "05",
        color: "yellow",
        facePattern: [0,1,2,3,4,5,6,7,8],
        titulo: "Orientar la última capa (OLL)",
        subtitulo: "Cara: amarillo",
        descripcion:
          "Con la cruz lista, orientá también las esquinas para que toda " +
          "la cara superior quede amarilla.",
        video: { tipo: "youtube", id: "TU_ID_DE_YOUTUBE_5" },
        imagenes: ["assets/img/3x3-paso5-a.jpg"],
        algoritmos: [{ nombre: "Sune", notacion: "R U R' U R U2 R'" }],
      },
      {
        id: "3x3-permutar-ultima-capa",
        numero: "06",
        color: "red",
        facePattern: [0,2,6,8],
        titulo: "Permutar la última capa (PLL)",
        subtitulo: "Cara: amarillo + laterales",
        descripcion:
          "Último paso: movés las piezas a su posición final correcta sin " +
          "desarmar la orientación. Cuando las cuatro caras laterales " +
          "queden parejas, el cubo está resuelto.",
        video: { tipo: "youtube", id: "TU_ID_DE_YOUTUBE_6" },
        imagenes: ["assets/img/3x3-paso6-a.jpg"],
        algoritmos: [
          { nombre: "Permutar esquinas", notacion: "R U R' U' R' F R2 U' R' U' R U R' F'" },
        ],
      },
    ],
  },

  /* ============================================================
     2) CUBO 4×4 — método de reducción
     ============================================================ */
  {
    id: "4x4",
    nombre: "Cubo 4×4",
    dificultad: "Intermedio",
    color: "blue",
    resumen: "Método de reducción: centros, aristas y después como un 3×3.",
    steps: [
      {
        id: "4x4-centros",
        numero: "01",
        color: "white",
        facePattern: [1,2,4,5,6,7],
        titulo: "Resolver los centros",
        subtitulo: "6 bloques de 2×2",
        descripcion:
          "Armá cada centro juntando los 4 cuadraditos de un mismo color " +
          "en un bloque de 2×2. Empezá por uno, después el opuesto, y " +
          "por último los cuatro laterales.",
        video: { tipo: "youtube", id: "TU_ID_YOUTUBE_4x4_1" },
        imagenes: ["assets/img/4x4-paso1-a.jpg"],
        algoritmos: [],
      },
      {
        id: "4x4-aristas",
        numero: "02",
        color: "green",
        facePattern: [1,3,5,7],
        titulo: "Emparejar las aristas",
        subtitulo: "12 pares de piezas",
        descripcion:
          "Cada arista del 4×4 está formada por dos piezas iguales. " +
          "Emparejalas todas usando un algoritmo que las combina sin " +
          "romper los centros ya armados.",
        video: { tipo: "youtube", id: "TU_ID_YOUTUBE_4x4_2" },
        imagenes: ["assets/img/4x4-paso2-a.jpg"],
        algoritmos: [
          { nombre: "Emparejar arista", notacion: "Rw U Rw' U Rw U2 Rw'" },
        ],
      },
      {
        id: "4x4-como-3x3",
        numero: "03",
        color: "yellow",
        facePattern: [0,1,2,3,4,5,6,7,8],
        titulo: "Resolver como un 3×3",
        subtitulo: "Método por capas",
        descripcion:
          "Una vez reducido (centros armados y aristas emparejadas), el " +
          "4×4 se comporta como un 3×3 normal. Aplicá el mismo método " +
          "por capas: cruz, esquinas, segunda capa y última capa.",
        video: { tipo: "youtube", id: "TU_ID_YOUTUBE_4x4_3" },
        imagenes: ["assets/img/4x4-paso3-a.jpg"],
        algoritmos: [],
      },
      {
        id: "4x4-paridad-aristas",
        numero: "04",
        color: "orange",
        facePattern: [1,3,5,7],
        titulo: "Paridad de aristas (OLL parity)",
        subtitulo: "Caso especial del 4×4",
        descripcion:
          "A veces, al llegar a la última capa, queda una sola arista mal " +
          "orientada — algo que no puede pasar en un 3×3 real. Es la " +
          "'paridad', propia de cubos pares. Se soluciona con un " +
          "algoritmo específico antes de seguir con el OLL normal.",
        video: { tipo: "youtube", id: "TU_ID_YOUTUBE_4x4_4" },
        imagenes: ["assets/img/4x4-paso4-a.jpg"],
        algoritmos: [
          { nombre: "Arreglar paridad de arista", notacion: "Rw U2 Rw U2 Fw' Uw2 Fw' Uw2 Fw2" },
        ],
      },
      {
        id: "4x4-paridad-pll",
        numero: "05",
        color: "red",
        facePattern: [0,2,6,8],
        titulo: "Paridad de permutación (PLL parity)",
        subtitulo: "Caso especial del 4×4",
        descripcion:
          "El otro caso propio de cubos pares: dos piezas quedan " +
          "intercambiadas entre sí en la última capa. Se resuelve con un " +
          "algoritmo antes de terminar el PLL normal.",
        video: { tipo: "youtube", id: "TU_ID_YOUTUBE_4x4_5" },
        imagenes: ["assets/img/4x4-paso5-a.jpg"],
        algoritmos: [
          { nombre: "Arreglar paridad PLL", notacion: "r2 U2 r2 Uw2 r2 Uw2" },
        ],
      },
    ],
  },

  /* ============================================================
     3) CUBO 5×5 — método de reducción
     ============================================================ */
  {
    id: "5x5",
    nombre: "Cubo 5×5",
    dificultad: "Intermedio",
    color: "green",
    resumen: "Igual que el 4×4 pero con más piezas por centro y por arista.",
    steps: [
      {
        id: "5x5-centros",
        numero: "01",
        color: "white",
        facePattern: [0,1,2,3,4,5,6,7,8],
        titulo: "Resolver los centros",
        subtitulo: "6 bloques de 3×3",
        descripcion:
          "Cada centro del 5×5 tiene 9 piezas (una fija en el medio, 8 " +
          "alrededor). Armalos igual que en el 4×4: uno, el opuesto, y " +
          "después los cuatro laterales.",
        video: { tipo: "youtube", id: "TU_ID_YOUTUBE_5x5_1" },
        imagenes: ["assets/img/5x5-paso1-a.jpg"],
        algoritmos: [],
      },
      {
        id: "5x5-aristas",
        numero: "02",
        color: "green",
        facePattern: [1,3,5,7],
        titulo: "Emparejar las aristas",
        subtitulo: "12 grupos de 3 piezas",
        descripcion:
          "Cada arista está formada por tres piezas (dos externas iguales " +
          "más una del medio). Agrupalas todas en las 12 aristas usando " +
          "el mismo tipo de algoritmo que en el 4×4.",
        video: { tipo: "youtube", id: "TU_ID_YOUTUBE_5x5_2" },
        imagenes: ["assets/img/5x5-paso2-a.jpg"],
        algoritmos: [
          { nombre: "Emparejar arista", notacion: "Rw U Rw' U Rw U2 Rw'" },
        ],
      },
      {
        id: "5x5-como-3x3",
        numero: "03",
        color: "yellow",
        facePattern: [0,1,2,3,4,5,6,7,8],
        titulo: "Resolver como un 3×3",
        subtitulo: "Método por capas",
        descripcion:
          "Con los centros armados y las aristas agrupadas, el 5×5 se " +
          "resuelve exactamente igual que un cubo 3×3: cruz, esquinas, " +
          "segunda capa y última capa.",
        video: { tipo: "youtube", id: "TU_ID_YOUTUBE_5x5_3" },
        imagenes: ["assets/img/5x5-paso3-a.jpg"],
        algoritmos: [],
      },
      {
        id: "5x5-paridades",
        numero: "04",
        color: "orange",
        facePattern: [1,3,5,7],
        titulo: "Paridades (menos frecuentes)",
        subtitulo: "Caso especial",
        descripcion:
          "Como el 5×5 tiene una capa central fija de referencia, las " +
          "paridades aparecen con menos frecuencia que en el 4×4, pero " +
          "pueden pasar. Se resuelven con los mismos algoritmos que en " +
          "el 4×4.",
        video: { tipo: "youtube", id: "TU_ID_YOUTUBE_5x5_4" },
        imagenes: ["assets/img/5x5-paso4-a.jpg"],
        algoritmos: [
          { nombre: "Arreglar paridad de arista", notacion: "Rw U2 Rw U2 Fw' Uw2 Fw' Uw2 Fw2" },
        ],
      },
    ],
  },

  /* ============================================================
     4) CUBO ESPEJO (MIRROR 3×3)
     ============================================================ */
  {
    id: "mirror3x3",
    nombre: "Mirror 3×3",
    dificultad: "Intermedio",
    color: "orange",
    resumen: "Mismo método que el 3×3, pero te guiás por la forma, no el color.",
    steps: [
      {
        id: "mirror-primera-capa",
        numero: "01",
        color: "white",
        facePattern: [4,1,3,5,7,0,2,6,8],
        titulo: "Primera capa por tamaño",
        subtitulo: "Guiarse por la forma",
        descripcion:
          "El Mirror Cube usa piezas de distinto tamaño en vez de colores. " +
          "Elegí una cara como base y armá la primera capa completa " +
          "guiándote por el tamaño y la forma de cada pieza, no por el " +
          "color (suele ser todo un mismo color).",
        video: { tipo: "youtube", id: "TU_ID_YOUTUBE_MIRROR_1" },
        imagenes: ["assets/img/mirror-paso1-a.jpg"],
        algoritmos: [{ nombre: "Insertar esquina", notacion: "R U R' U'" }],
      },
      {
        id: "mirror-segunda-capa",
        numero: "02",
        color: "green",
        facePattern: [1,3,4,5,7],
        titulo: "Segunda capa",
        subtitulo: "Mismos algoritmos que el 3×3",
        descripcion:
          "Insertá las piezas de la capa del medio con los mismos " +
          "algoritmos de mano derecha e izquierda del método por capas " +
          "clásico. Fijate en el perfil de cada pieza para saber dónde va.",
        video: { tipo: "youtube", id: "TU_ID_YOUTUBE_MIRROR_2" },
        imagenes: ["assets/img/mirror-paso2-a.jpg"],
        algoritmos: [
          { nombre: "Arista a la derecha", notacion: "U R U' R' U' F' U F" },
        ],
      },
      {
        id: "mirror-orientar-ultima",
        numero: "03",
        color: "yellow",
        facePattern: [0,1,2,3,4,5,6,7,8],
        titulo: "Orientar la última capa",
        subtitulo: "Nivelar el contorno",
        descripcion:
          "Usá el algoritmo Sune para llevar todas las piezas de la " +
          "última capa a la altura correcta, hasta que el contorno " +
          "superior quede parejo.",
        video: { tipo: "youtube", id: "TU_ID_YOUTUBE_MIRROR_3" },
        imagenes: ["assets/img/mirror-paso3-a.jpg"],
        algoritmos: [{ nombre: "Sune", notacion: "R U R' U R U2 R'" }],
      },
      {
        id: "mirror-permutar-ultima",
        numero: "04",
        color: "red",
        facePattern: [0,2,6,8],
        titulo: "Permutar la última capa",
        subtitulo: "Ajuste final",
        descripcion:
          "Terminá moviendo las piezas a su posición final. Al ser todo " +
          "un color, comprobás que el cubo esté resuelto por la silueta " +
          "pareja, no por colores emparejados.",
        video: { tipo: "youtube", id: "TU_ID_YOUTUBE_MIRROR_4" },
        imagenes: ["assets/img/mirror-paso4-a.jpg"],
        algoritmos: [
          { nombre: "Permutar esquinas", notacion: "R U R' U' R' F R2 U' R' U' R U R' F'" },
        ],
      },
    ],
  },

  /* ============================================================
     5) PYRAMINX
     ============================================================ */
  {
    id: "pyraminx",
    nombre: "Pyraminx",
    dificultad: "Principiante",
    color: "yellow",
    resumen: "El puzzle triangular. Rápido de aprender, distinto método.",
    steps: [
      {
        id: "pyra-puntas",
        numero: "01",
        color: "yellow",
        facePattern: [0,2,6],
        titulo: "Alinear las puntas",
        subtitulo: "4 piezas libres",
        descripcion:
          "Las cuatro puntas del Pyraminx giran libres y no afectan al " +
          "resto del rompecabezas. Girá cada una hasta que combine con " +
          "el color de la cara donde está.",
        video: { tipo: "youtube", id: "TU_ID_YOUTUBE_PYRA_1" },
        imagenes: ["assets/img/pyra-paso1-a.jpg"],
        algoritmos: [],
      },
      {
        id: "pyra-centros",
        numero: "02",
        color: "red",
        facePattern: [4],
        titulo: "Alinear los centros",
        subtitulo: "4 piezas centrales, también libres",
        descripcion:
          "Las piezas centrales de cada cara también giran libres, igual " +
          "que las puntas. Alinealas para que coincidan con el color " +
          "correspondiente de cada cara.",
        video: { tipo: "youtube", id: "TU_ID_YOUTUBE_PYRA_2" },
        imagenes: ["assets/img/pyra-paso2-a.jpg"],
        algoritmos: [],
      },
      {
        id: "pyra-primera-capa-aristas",
        numero: "03",
        color: "blue",
        facePattern: [1,3,5,7],
        titulo: "Primera capa de aristas",
        subtitulo: "3 de las 6 aristas",
        descripcion:
          "Con los centros ya alineados, buscá formar una cara completa " +
          "resolviendo tres de las seis aristas del cuerpo del " +
          "Pyraminx, insertándolas debajo de su centro correspondiente.",
        video: { tipo: "youtube", id: "TU_ID_YOUTUBE_PYRA_3" },
        imagenes: ["assets/img/pyra-paso3-a.jpg"],
        algoritmos: [],
      },
      {
        id: "pyra-ultimas-aristas",
        numero: "04",
        color: "green",
        facePattern: [1,3,5,7,0,2,6,8],
        titulo: "Últimas tres aristas",
        subtitulo: "Con un algoritmo simple",
        descripcion:
          "Las tres aristas restantes se resuelven con un algoritmo " +
          "corto que se repite según el caso, hasta que las seis " +
          "aristas y las cuatro caras queden completas.",
        video: { tipo: "youtube", id: "TU_ID_YOUTUBE_PYRA_4" },
        imagenes: ["assets/img/pyra-paso4-a.jpg"],
        algoritmos: [
          { nombre: "Insertar arista (izquierda)", notacion: "L' U L U'" },
          { nombre: "Insertar arista (derecha)", notacion: "R U' R' U" },
        ],
      },
    ],
  },

];

/* Galería general: fotos sueltas (armados, trucos, cubos, etc.) — se
   muestra igual para todos los cubos. */
const GALERIA = [
  { src: "assets/img/galeria-1.jpg", alt: "Cubo resuelto" },
  { src: "assets/img/galeria-2.jpg", alt: "Detalle de una esquina" },
  { src: "assets/img/galeria-3.jpg", alt: "Cubo desarmado para lubricar" },
  { src: "assets/img/galeria-4.jpg", alt: "Timer de speedcubing" },
];
