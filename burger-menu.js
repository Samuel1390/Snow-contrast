document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const selectElement = document.getElementById('select-main-elemets');
    const selectElementMobile = document.getElementById('select-main-elemets-mobile');
    
    // Toggle del menú desplegable
    if (menuToggle && dropdownMenu) {
        menuToggle.addEventListener('click', function() {
        const isExpanded = menuToggle.classList.toggle('active');
        dropdownMenu.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
    });
    
    // cerrar menú al hacer clic fuera
    document.addEventListener('click', function(event) {
        if (!menuToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', false);
        }
    });
    // Agregar después del event listener click
    menuToggle.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            menuToggle.click();
        }
    });

// Para mejor accesibilidad en el dropdown
    dropdownMenu.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            dropdownMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.focus();
        }
    });
}
})