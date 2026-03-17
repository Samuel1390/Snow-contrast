export function renderCalendar() {
  return `
        <!-- Sección de calendario -->
        <section style="box-shadow: 0 0 25px #000;" class="section-container invert" id="calendar-section">
            <div class="calendar-container">
                <div class="calendar-header element">
                    <h2 class="title task-time">Hoy es 
                        <span class="day">Lunes</span>
                        <span class="material-symbols-outlined" style="scale: 1.2;">calendar_today</span>
                        <span class="time">1/01/2025</span></h2>
                </div>
                <div class="task-grid element">
                    <div class="task-grid-item back-shadow">
                        <span class="material-symbols-outlined task-icon">
                            favorite
                        </span>
                        <h3 class="subtitle">Dios</h3>
                        <h3 class="text">5:00 am</h3>
                    </div>
                    <div class="task-grid-item back-shadow">
                        <span class="material-symbols-outlined task-icon">fitness_center</span>
                        <h3 class="subtitle">Gimnasio</h3>
                        <h3 class="text">6:00 am</h3>
                    </div>
                    <div class="task-grid-item back-shadow">
                        <span class="material-symbols-outlined task-icon">restaurant</span>
                        <h3 class="subtitle">Desayuno</h3>
                        <h3 class="text">7:30 am</h3>
                    </div>
                    <div class="task-grid-item back-shadow">
                        <span class="material-symbols-outlined task-icon">code</span>
                        <h3 class="subtitle">Código</h3>
                        <h3 class="text">8:00 am</h3>
                    </div>
                    <div class="task-grid-item back-shadow">
                        <span class="material-symbols-outlined task-icon">book_2</span>
                        <h3 class="subtitle">Estudiar</h3>
                        <h3 class="text">1:00 pm</h3>
                    </div>
                    <div class="task-grid-item back-shadow">
                        <span class="material-symbols-outlined task-icon">bed</span>
                        <h3 class="subtitle">Dormir</h3>
                        <h3 class="text">9:00 pm</h3>
                    </div>
                </div>
            </div>
        </section>
    `;
}

export function initCalendarLogic() {
  const daySpan = document.querySelector(".day");
  const timeSpan = document.querySelector(".time");

  function getWeekDayString(number) {
    switch (number) {
      case 0:
        return "Domingo";
      case 1:
        return "Lunes";
      case 2:
        return "Martes";
      case 3:
        return "Miércoles";
      case 4:
        return "Jueves";
      case 5:
        return "Viernes";
      case 6:
        return "Sábado";
      default:
        return "(error al cargar el dia actual)";
    }
  }

  function getTime() {
    const date = new Date();
    const weekDate = date.getDay();
    const day = date.getDate();
    const month = date.getMonth() + 1; // months start at 0
    const year = date.getFullYear();

    if (timeSpan) {
      timeSpan.textContent = `${day}/${month}/${year}`;
    }
    if (daySpan) {
      daySpan.textContent = getWeekDayString(weekDate);
    }
  }

  // Initialize calendar time
  getTime();
}
