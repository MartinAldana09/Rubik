/* ============================================================
   CONTENIDO DEL TUTORIAL
   ============================================================
   Edita este archivo para agregar tus propios pasos, videos,
   fotos y descripciones. No necesitas tocar HTML ni CSS.

   Cada paso admite:
   - color:        una de "white","yellow","red","orange","blue","green"
                    (se usa para el mini-indicador de cara del cubo)
   - facePattern:  array de 9 posiciones (0-8) que se pintan del
                    color de arriba para "dibujar" el patrón de esa
                    etapa en la carita de 3x3 (opcional, decorativo)
   - titulo, subtitulo, descripcion: texto libre
   - video:        { tipo: "youtube", id: "XXXXXXXXXXX" }  ó
                    { tipo: "local", src: "assets/video/paso1.mp4" }
   - imagenes:     array de rutas dentro de assets/img/
   - algoritmos:   array de { nombre, notacion } (opcional)
   ============================================================ */

const CUBE_STEPS = [
  {
    id: "cruz-blanca",
    numero: "01",
    color: "white",
    facePattern: [4,1,3,5,7], // cruz
    titulo: "La cruz blanca",
    subtitulo: "Cara: blanco",
    descripcion:
      "Formá una cruz de color blanco en una cara, haciendo coincidir " +
      "los colores laterales de cada arista con el centro de su cara " +
      "correspondiente. Es la base de todo el método por capas.",
    video: {
      tipo: "youtube",
      id: "TU_ID_DE_YOUTUBE_1", // reemplazá por el ID real de tu video
    },
    imagenes: [
      "assets/img/paso1-a.jpg",
      "assets/img/paso1-b.jpg",
    ],
    algoritmos: [],
  },
  {
    id: "esquinas-primera-capa",
    numero: "02",
    color: "white",
    facePattern: [0,2,4,6,8],
    titulo: "Esquinas de la primera capa",
    subtitulo: "Cara: blanco",
    descripcion:
      "Ubicá las cuatro esquinas blancas debajo de su posición final y " +
      "usá el algoritmo del 'tirabuzón' (R U R' U') para insertarlas " +
      "sin desarmar la cruz.",
    video: {
      tipo: "youtube",
      id: "TU_ID_DE_YOUTUBE_2",
    },
    imagenes: ["assets/img/paso2-a.jpg"],
    algoritmos: [
      { nombre: "Insertar esquina", notacion: "R U R' U'" },
    ],
  },
  {
    id: "segunda-capa",
    numero: "03",
    color: "green",
    facePattern: [1,3,4,5,7],
    titulo: "Segunda capa (aristas)",
    subtitulo: "Cara: lateral",
    descripcion:
      "Con la primera capa resuelta, insertá las cuatro aristas de la " +
      "capa del medio usando los algoritmos de mano derecha o mano " +
      "izquierda según hacia dónde deba ir la pieza.",
    video: {
      tipo: "youtube",
      id: "TU_ID_DE_YOUTUBE_3",
    },
    imagenes: ["assets/img/paso3-a.jpg", "assets/img/paso3-b.jpg"],
    algoritmos: [
      { nombre: "Arista a la derecha", notacion: "U R U' R' U' F' U F" },
      { nombre: "Arista a la izquierda", notacion: "U' L' U L U F U' F'" },
    ],
  },
  {
    id: "cruz-amarilla",
    numero: "04",
    color: "yellow",
    facePattern: [4,1,3,5,7],
    titulo: "Cruz amarilla (OLL - aristas)",
    subtitulo: "Cara: amarillo",
    descripcion:
      "Orientá las aristas de la última capa para formar una cruz " +
      "amarilla arriba, sin importar todavía si los colores laterales " +
      "coinciden.",
    video: {
      tipo: "youtube",
      id: "TU_ID_DE_YOUTUBE_4",
    },
    imagenes: ["assets/img/paso4-a.jpg"],
    algoritmos: [{ nombre: "Formar la cruz", notacion: "F R U R' U' F'" }],
  },
  {
    id: "orientar-ultima-capa",
    numero: "05",
    color: "yellow",
    facePattern: [0,1,2,3,4,5,6,7,8],
    titulo: "Orientar la última capa (OLL)",
    subtitulo: "Cara: amarillo",
    descripcion:
      "Con la cruz lista, orientá también las esquinas para que toda " +
      "la cara superior quede amarilla, sin preocuparte todavía por " +
      "la posición final de cada pieza.",
    video: {
      tipo: "youtube",
      id: "TU_ID_DE_YOUTUBE_5",
    },
    imagenes: ["assets/img/paso5-a.jpg"],
    algoritmos: [
      { nombre: "Sune", notacion: "R U R' U R U2 R'" },
    ],
  },
  {
    id: "permutar-ultima-capa",
    numero: "06",
    color: "red",
    facePattern: [0,2,6,8],
    titulo: "Permutar la última capa (PLL)",
    subtitulo: "Cara: amarillo + laterales",
    descripcion:
      "Último paso: movés las piezas a su posición final correcta sin " +
      "desarmar la orientación. Cuando las cuatro caras laterales " +
      "queden parejas, el cubo está resuelto.",
    video: {
      tipo: "youtube",
      id: "TU_ID_DE_YOUTUBE_6",
    },
    imagenes: ["assets/img/paso6-a.jpg"],
    algoritmos: [
      { nombre: "Permutar esquinas", notacion: "R U R' U' R' F R2 U' R' U' R U R' F'" },
    ],
  },
];

/* Galería general: fotos sueltas (armados, trucos, cubos, etc.) */
const GALERIA = [
  { src: "assets/img/galeria-1.jpg", alt: "Cubo resuelto" },
  { src: "assets/img/galeria-2.jpg", alt: "Detalle de una esquina" },
  { src: "assets/img/galeria-3.jpg", alt: "Cubo desarmado para lubricar" },
  { src: "assets/img/galeria-4.jpg", alt: "Timer de speedcubing" },
];
