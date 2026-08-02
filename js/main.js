// ============================================================
// Renderiza el índice, los pasos y la galería a partir de
// CUBE_STEPS y GALERIA (definidos en js/content.js)
// ============================================================

function miniFace(pattern, color){
  const cells = Array.from({length:9}, (_,i)=>{
    const on = pattern && pattern.includes(i);
    return `<i class="${on ? "on c-"+color : ""}"></i>`;
  }).join("");
  return `<div class="mini-face">${cells}</div>`;
}

function renderIndex(){
  const el = document.getElementById("index-grid");
  el.innerHTML = CUBE_STEPS.map(step => `
    <a class="index-card" href="#${step.id}">
      <span class="num">${step.numero}</span>
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

function renderSteps(){
  const el = document.getElementById("steps-list");
  el.innerHTML = CUBE_STEPS.map(step => `
    <article class="step" id="${step.id}">
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

function renderGaleria(){
  const el = document.getElementById("galeria-grid");
  if (!el) return;
  el.innerHTML = GALERIA.map(item => `
    <figure>
      <img src="${item.src}" alt="${item.alt}" loading="lazy" onerror="this.parentElement.remove();">
      <figcaption>${item.alt}</figcaption>
    </figure>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderIndex();
  renderSteps();
  renderGaleria();
  document.getElementById("year").textContent = new Date().getFullYear();
});
