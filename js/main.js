// ============================================================
// Menú de cubos + render dinámico del tutorial elegido.
// Los datos vienen de CUBES y GALERIA (definidos en js/content.js)
// ============================================================

const ACCENT = {
  white:  "var(--white-c)",
  yellow: "var(--yellow)",
  red:    "var(--red)",
  orange: "var(--orange)",
  blue:   "var(--blue)",
  green:  "var(--green)",
};

let activeCubeId = CUBES[0].id;

function getCubeById(id){
  return CUBES.find(c => c.id === id) || CUBES[0];
}

/* ------------------------------------------------------------
   Menú: tarjeta por cada cubo
   ------------------------------------------------------------ */
function renderMenu(){
  const el = document.getElementById("cube-menu");
  el.innerHTML = CUBES.map(cube => `
    <button
      class="cube-card reveal ${cube.id === activeCubeId ? "active" : ""}"
      style="--dot:${ACCENT[cube.color] || "var(--yellow)"}"
      data-cube-id="${cube.id}"
      type="button"
    >
      <span class="cube-card-top">
        <span class="dot"></span>
        <span class="tag">${cube.dificultad}</span>
      </span>
      <span class="cube-card-name">${cube.nombre}</span>
      <span class="cube-card-desc">${cube.resumen}</span>
      <span class="cube-card-cta">Ver tutorial →</span>
    </button>
  `).join("");

  el.querySelectorAll(".cube-card").forEach(card => {
    card.addEventListener("click", () => {
      selectCube(card.dataset.cubeId, true);
    });
  });
}

function updateMenuActiveState(){
  document.querySelectorAll(".cube-card").forEach(card => {
    card.classList.toggle("active", card.dataset.cubeId === activeCubeId);
  });
}

/* ------------------------------------------------------------
   Hero dinámico: título / bajada según el cubo elegido
   ------------------------------------------------------------ */
function renderHero(cube){
  document.getElementById("hero-eyebrow-text").textContent =
    `Tutorial · ${cube.nombre} · ${cube.dificultad}`;
  document.getElementById("hero-title-cube").textContent = cube.nombre;
  document.getElementById("hero-lead").textContent =
    `${cube.steps.length} pasos, cada uno con su video, sus fotos y su explicación. ${cube.resumen}`;
  const pasosTitle = document.getElementById("pasos-cube-title");
  if (pasosTitle) pasosTitle.textContent = `Ahora mostrando: ${cube.nombre}`;
}

/* ------------------------------------------------------------
   Mini carita 3x3 (indicador de cara/color de cada paso)
   ------------------------------------------------------------ */
function miniFace(pattern, color){
  const cells = Array.from({length:9}, (_,i)=>{
    const on = pattern && pattern.includes(i);
    return `<i class="${on ? "on c-"+color : ""}"></i>`;
  }).join("");
  return `<div class="mini-face">${cells}</div>`;
}

/* ------------------------------------------------------------
   Índice de pasos del cubo activo
   ------------------------------------------------------------ */
function renderIndex(cube){
  const el = document.getElementById("index-grid");
  el.innerHTML = cube.steps.map(step => `
    <a class="index-card reveal" href="#${step.id}" style="--dot:${ACCENT[step.color] || "var(--yellow)"}">
      <span class="num"><span class="dot"></span>${step.numero}</span>
      <div class="name">${step.titulo}</div>
    </a>
  `).join("");
}

function videoEmbed(video){
  if (!video) return "";
  if (video.tipo === "youtube"){
    return `<iframe
      src="https://www.youtube.com/embed/${video.id}"
      title="Video del paso"
