# Método Capas — Tutorial de cubo Rubik

Sitio estático (HTML + CSS + JS, sin frameworks ni build) listo para
publicar en Netlify.

## Estructura

```
rubik-tutorial/
├── index.html          → página principal (no hace falta tocarla)
├── css/
│   └── styles.css      → todo el diseño
├── js/
│   ├── content.js       → ACÁ editás tus pasos, videos, fotos y textos
│   └── main.js          → arma el HTML a partir de content.js
├── assets/
│   ├── img/             → poné acá tus fotos (.jpg, .png, .webp)
│   └── video/           → poné acá tus videos si NO usás YouTube
└── netlify.toml
```

## Cómo agregar contenido

Todo el contenido vive en `js/content.js`, en dos listas:

- `CUBE_STEPS`: los 6 pasos del tutorial (cruz blanca, esquinas, etc.)
- `GALERIA`: fotos sueltas para la sección de galería

Para cada paso podés definir:

| Campo         | Qué es                                                             |
|---------------|---------------------------------------------------------------------|
| `titulo`      | Título del paso                                                    |
| `subtitulo`   | Texto corto (ej. "Cara: blanco")                                   |
| `descripcion` | Explicación del paso                                                |
| `video`       | `{ tipo: "youtube", id: "..." }` o `{ tipo: "local", src: "..." }` |
| `imagenes`    | Lista de rutas a fotos dentro de `assets/img/`                     |
| `algoritmos`  | Lista de `{ nombre, notacion }` para mostrar la notación del cubo  |

**Video de YouTube**: subí el video a YouTube (puede ser "oculto", no
hace falta que sea público) y copiá el ID que aparece después de
`watch?v=` en la URL. Ejemplo: en
`https://www.youtube.com/watch?v=dQw4w9WgXcQ` el ID es `dQw4w9WgXcQ`.

**Video propio (sin YouTube)**: copiá el archivo `.mp4` dentro de
`assets/video/`, cambiá `tipo` a `"local"` y `src` a la ruta del
archivo. Tené en cuenta que Netlify (plan gratuito) tiene límite de
ancho de banda, así que para muchos videos pesados YouTube/Vimeo
embebido suele ser más práctico que subir los archivos directamente.

## Cómo publicarlo en Netlify

**Opción A — arrastrar y soltar (la más simple):**

1. Entrá a [app.netlify.com](https://app.netlify.com) y creá una cuenta gratis.
2. En el dashboard, buscá la zona que dice "Deploy manually" / arrastrá
   una carpeta.
3. Arrastrá la carpeta `rubik-tutorial` completa (la que contiene
   `index.html`).
4. Netlify te da una URL al instante (algo como
   `nombre-random.netlify.app`). Podés cambiar el subdominio desde
   "Site settings → Change site name".

**Opción B — conectado a GitHub (recomendada si vas a actualizar seguido):**

1. Subí esta carpeta a un repositorio de GitHub.
2. En Netlify: "Add new site → Import an existing project → GitHub".
3. Elegí el repositorio. Como es un sitio estático sin build:
   - Build command: dejalo vacío
   - Publish directory: `.` (la raíz del proyecto)
4. Cada vez que hagas `git push`, Netlify vuelve a publicar
   automáticamente.

## Dominio propio (opcional)

Desde "Site settings → Domain management" podés conectar un dominio
que ya tengas, o comprar uno directamente desde Netlify.
