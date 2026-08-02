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
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>`;
  }
  if (video.tipo === "local"){
    return `<video controls preload="metadata" src="${video.src}"></video>`;
  }
  return "";
}

/* ------------------------------------------------------------
   Pasos del cubo activo (video + fotos + descripción)
   ------------------------------------------------------------ */
function renderSteps(cube){
  const el = document.getElementById("steps-list");
  el.innerHTML = cube.steps.map(step => `
    <article class="step reveal" id="${step.id}" style="--accent:${ACCENT[step.color] || "var(--yellow)"}">
      <div class="step-aside">
        <div class="step-num">${step.numero}</div>
        <div class="face-tag">
          ${miniFace(step.facePattern, step.color)}
          <span>${step.subtitulo}</span>
        </div>
        <h3>${step.titulo}</h3>
        <p>${step.descripcion}</p>
        ${
          step.algoritmos && step.algoritmos.length
            ? `<div class="algo-list">${step.algoritmos.map(a => `
                <div class="algo">
                  <div class="algo-name">${a.nombre}</div>
                  <div class="algo-not">${a.notacion}</div>
                </div>`).join("")}</div>`
            : ""
        }
      </div>
      <div class="step-media">
        <div class="video-frame">${videoEmbed(step.video)}</div>
        ${
          step.imagenes && step.imagenes.length
            ? `<div class="photo-row">${step.imagenes.map(src => `
                <img src="${src}" alt="${step.titulo}" loading="lazy" onerror="this.closest('.photo-row').style.display=this.closest('.photo-row').querySelectorAll('img').length===1?'none':''; this.remove();">
              `).join("")}</div>`
            : ""
        }
      </div>
    </article>
  `).join("");
}

/* ------------------------------------------------------------
   Galería general (misma para todos los cubos)
   ------------------------------------------------------------ */
function renderGaleria(){
  const el = document.getElementById("galeria-grid");
  if (!el) return;
  el.innerHTML = GALERIA.map(item => `
    <figure class="reveal">
      <img src="${item.src}" alt="${item.alt}" loading="lazy" onerror="this.parentElement.remove();">
      <figcaption>${item.alt}</figcaption>
    </figure>
  `).join("");
}

/* ------------------------------------------------------------
   Cambiar de cubo: actualiza estado, URL (#) y vuelve a
   renderizar hero + índice + pasos
   ------------------------------------------------------------ */
function selectCube(cubeId, fromClick){
  const cube = getCubeById(cubeId);
  activeCubeId = cube.id;

  renderHero(cube);
  renderIndex(cube);
  renderSteps(cube);
  updateMenuActiveState();
  initReveal();

  if (fromClick){
    history.pushState(null, "", `#cubo-${cube.id}`);
    const target = document.getElementById("tutorial-top");
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/* ------------------------------------------------------------
   Leer el cubo desde la URL (ej. #cubo-4x4) si existe
   ------------------------------------------------------------ */
function cubeIdFromHash(){
  const match = location.hash.match(/^#cubo-(.+)$/);
  if (match && CUBES.some(c => c.id === match[1])) return match[1];
  return null;
}

/* ------------------------------------------------------------
   Aparición suave de elementos al hacer scroll
   ------------------------------------------------------------ */
function initReveal(){
  const items = document.querySelectorAll(".reveal:not(.in)");
  if (!("IntersectionObserver" in window)){
    items.forEach(el => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  items.forEach(el => io.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  const fromHash = cubeIdFromHash();
  activeCubeId = fromHash || CUBES[0].id;

  renderMenu();
  renderGaleria();
  selectCube(activeCubeId, false);
  document.getElementById("year").textContent = new Date().getFullYear();
  initReveal();
});

window.addEventListener("popstate", () => {
  const fromHash = cubeIdFromHash();
  if (fromHash) selectCube(fromHash, false);
});
