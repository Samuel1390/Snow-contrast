export function renderDeveloper() {
  return `
        <section class="section-container element" style="box-shadow: 0 0 25px #000;" id="developer-section">
            <div class="developer-section invert shadow">
                <h2>Acerca del Desarrollador</h2>
                <img loading="lazy" class="shadow-invert" src="https://avatars.githubusercontent.com/u/195463641?v=4" alt="foto de Samuel Nelo, desarrollador de snow contrast">
                <div class="developer-text">
                    <h3 class="title" title="desarrollador">Samuel Nelo</h3>
                    <p>Soy un programador enfocado al frontend y me dedico a hacer páginas web a negocios locales y herramientas
                        para programadores como esta. Si te gusta mi trabajo, puedes enviarme un whatsapp y contarme como seria tu
                        sitio web ideal para tu negocio o emprendimiento, y si quieres ver más proyectos como este puedes visitar mi
                        github
                    </p>
                </div>
                <div class="icons-container dev-icons">
                    <a href="https://github.com/Samuel1390" target="_blank" rel="noopener" aria-label="enlace al github de Samuel Nelo">
                        <img loading="lazy" class="icon" height="48" width="48" alt="icono de github" src="https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/github.svg" />
                    </a>
                    <a href="https://wa.me/+584125053991" target="_blank" aria-label="enlace al whatsapp de Samuel Nelo" rel="noopener">
                        <img loading="lazy" class="icon" height="48" width="48" alt="icono de whatsapp" src="https://unpkg.com/simple-icons@v16/icons/whatsapp.svg" />
                    </a>
                </div>
            </div>
        </section>
    `;
}
