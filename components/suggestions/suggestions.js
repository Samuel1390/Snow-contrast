export function renderSuggestions() {
    return `
        <section class="section-container element" style="box-shadow: 0 0 25px #000;" id="suggestions-section">
            <div class="sugestions-container">
                <div class="sugestions-header invert">
                    <h2 class="title" >Sugerencias de contraste</h2>
                    <p class="text">Prueba estos geniales combos de colores</p>
                </div>
            </div>
            <div class="sugestions-grid" aria-label="tabla de sugerencias de colores">
                <div class="sugestions-item" style="flex-direction: row;" aria-label="aplicar combinacion de colores café">
                    <div class="sugestion-color" style="background-color: #3B280C;"></div>
                    <div class="sugestion-color" style="background-color: #EEC681;"></div>
                </div>
                <button aria-label="aplicar combinacion de colores coffee" class="sugestion-name invert shadow">
                    <h3 class="title">Coffee</h3>
                </button>
                <div class="sugestions-item" style="flex-direction: row;" aria-label="aplicar combinacion de colores rosa">
                    <div class="sugestion-color" style="background-color: #061028;"></div>
                    <div class="sugestion-color" style="background-color: #F47C7C;"></div>
                </div>
                <button aria-label="aplicar combinacion de colores rose" class="sugestion-name invert shadow">
                    <h3 class="title">Rose</h3>
                </button>
                <div aria-label="aplicar combinacion de colores Voltage" class="sugestions-item" style="flex-direction: row;">
                    <div class="sugestion-color" style="background-color: #3C3E38;"></div>
                    <div class="sugestion-color" style="background-color: #C6FF4D;"></div>
                </div>
                <button aria-label="aplicar combinacion de colores Voltage" class="sugestion-name invert shadow">
                    <h3 class="title">Voltage</h3>
                </button>
                <div aria-label="aplicar combinacion de colores metálico" class="sugestions-item" style="flex-direction: row;">
                    <div class="sugestion-color" style="background-color: #000000;"></div>
                    <div class="sugestion-color" style="background-color: #c4c4c4;"></div>
                </div>
                <button class="sugestion-name invert shadow">
                    <h3 aria-label="aplicar combinacion de colores metálico" class="title">Metallic</h3>
                </button>
                <div aria-label="aplicar combinacion de colores jardín" class="sugestions-item" style="flex-direction: row;">
                    <div class="sugestion-color" style="background-color: #2F2B04;"></div>
                    <div class="sugestion-color" style="background-color: #CDE675;"></div>
                </div>
                <button class="sugestion-name invert shadow">
                    <h3 aria-label="aplicar combinacion de colores jardín" class="title">Garden</h3>
                </button>
                <div aria-label="aplicar combinacion de colores lavanda" class="sugestions-item" style="flex-direction: row;">
                    <div class="sugestion-color" style="background-color: #1D031B;"></div>
                    <div class="sugestion-color" style="background-color: #C0C4F0;"></div>
                </div>
                <button aria-label="aplicar combinacion de colores lavanda" class="sugestion-name invert shadow">
                    <h3 class="title">Lavender</h3>
                </button>
                <div aria-label="aplicar combinacion de colores bosque" class="sugestions-item" style="flex-direction: row;">
                    <div class="sugestion-color" style="background-color: #000000;"></div>
                    <div class="sugestion-color" style="background-color: #009E5A;"></div>
                </div>
                <button aria-label="aplicar combinacion de colores bosque" class="sugestion-name invert shadow">
                    <h3 class="title">Forest</h3>
                </button>
            </div>
        </section>
    `;
}

export function initSuggestionsLogic(updateColorCallback) {
    const sugetionButtonsLabels = document.querySelectorAll('.sugestion-name');
    const sugestionButtons = document.querySelectorAll('.sugestions-item');

    sugetionButtonsLabels.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.previousElementSibling;
            if (target && target.children.length >= 2) {
                const [darkColorDiv, lightColorDiv] = target.children;
                if (typeof updateColorCallback === 'function') {
                    updateColorCallback(darkColorDiv.style.backgroundColor, lightColorDiv.style.backgroundColor);
                }
            }
        });
    });

    sugestionButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.children.length >= 2) {
                const [darkColorDiv, lightColorDiv] = button.children;
                if (typeof updateColorCallback === 'function') {
                    updateColorCallback(darkColorDiv.style.backgroundColor, lightColorDiv.style.backgroundColor);
                }
            }
        });
    });
}
