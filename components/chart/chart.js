export function renderChart() {
  return `
        <!-- Sección de gráfico de cadio de contraste -->
        <section aria-label="Sección de gráfico de radio de contraste" style="box-shadow: 0 0 25px #000;"  class="element section-container" id="chart-section">
            <div class="chart-container shadow">
                <div class="chart-header">
                    <h2><span class="material-symbols-outlined">insights</span> Radio de contraste</h2>
                    <p class="section-subtitle" style="color: #0009;">Información adicional acerca de el radio de contraste recomendado por WCAG 2.1</p>
                </div>
                
                <div class="chart-wrapper">
                    <!-- Grafico circular -->
                    <div class="circular-chart" aria-label="Gráfico circular que muestra el ratio de contraste actual">
                        <svg viewBox="0 0 36 36" class="circular-chart-svg">
                            <!-- Fondo del circulo (gris claro) -->
                            <path class="circle-bg"
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="#666"
                                stroke-width="3.2"/>
                            
                            <!-- círculo de progreso (de color correspondiente) -->
                            <path class="circle-progress"
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="#000000"
                                stroke-width="3.2"
                                stroke-dasharray="0, 100"
                                stroke-linecap="round"/>
                            
                            <!-- Texto en el centro -->
                            <text x="18" y="20.35" class="chart-value" text-anchor="middle">0.00</text>
                            <text x="18" y="25" class="chart-label" text-anchor="middle" fill="#333333">Ratio</text>
                        </svg>
                    </div>
                    
                    <!-- Indicadores de nivel -->
                    <div class="chart-legend">
                        <div class="legend-item">
                            <div class="legend-color" style="background-color: #ff4d4d;"></div>
                            <span>Muy bajo (&lt;4.5)</span>
                        </div>
                        <div class="legend-item">
                            <div class="legend-color" style="background-color: #ffcc00;"></div>
                            <span>Aceptable (4.5-6)</span>
                        </div>
                        <div class="legend-item">
                            <div class="legend-color" style="background-color: #b8d432;"></div>
                            <span>Bien (6-9)</span>
                        </div>
                        <div class="legend-item">
                            <div class="legend-color" style="background-color: #00cc66;"></div>
                            <span>Excelente (9-21)</span>
                        </div>
                    </div>
                </div>
                
                <!-- Información adicional -->
                <div class="chart-info">
                    <div class="info-item">
                        <span class="material-symbols-outlined">info</span>
                        <p>El ratio mínimo recomendado por WCAG 2.1 para texto normal es <strong>4.5:1</strong></p>
                    </div>
                    <div class="info-item">
                        <span class="material-symbols-outlined">visibility</span>
                        <p>Para texto grande (18px+), el mínimo es <strong>3:1</strong></p>
                    </div>
                    <div class="info-item">
                        <span class="material-symbols-outlined">star</span>
                        <p>Un ratio de <strong>7:1</strong> o superior es ideal para máxima legibilidad</p>
                    </div>
                </div>
            </div>
        </section>
    `;
}

export function updateCircularChart(ratio) {
  const chartProgress = document.querySelector(".circle-progress");
  const chartValue = document.querySelector(".chart-value");

  if (!chartProgress || !chartValue) return;

  // el ratio máximo es 21:1 (contraste máximo posible) blanco y negro absolutos
  const maxRatio = 21;
  // calculamos el porcentaje (limitamos a 100%)
  let percentage = Math.min((ratio / maxRatio) * 100, 100);

  const circumference = 100; // 100% del círculo
  const dashArray = `${percentage}, ${circumference}`;
  chartProgress.style.strokeDasharray = dashArray;

  chartValue.textContent = ratio;

  // Cambiamos el color del círculo según el ratio
  let progressColor;
  if (ratio >= 9) {
    progressColor = "#00a352ff"; // verde para excelente
  } else if (ratio >= 6 && ratio < 9) {
    progressColor = "#b8d432"; // verde amarillento para bien
  } else if (ratio >= 4.5 && ratio < 6) {
    progressColor = "#ffcc00"; // Amarillo para aceptable
  } else {
    progressColor = "#ff4d4d"; // rojo para muy bajo
  }

  chartProgress.style.stroke = progressColor;
  chartValue.style.fill = progressColor;
}
