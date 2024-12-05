// Formulario de contacto
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Me pondré en contacto pronto.');
    e.target.reset();
});
//efecto de deslizar
document.querySelectorAll('#navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Ajusta si tienes un menú fijo
                behavior: 'smooth'
            });
        }
    });
});

function mostrarDetalles(id) {
    // Cierra todas las secciones de detalles abiertas
    const detalles = document.querySelectorAll('.detalles-ocultos');
    detalles.forEach(detalle => {
        if (detalle.id !== id) {
            detalle.classList.remove('detalles-activos');
        }
    });

    // Alterna el estado de la sección seleccionada
    const detalleSeleccionado = document.getElementById(id);
    if (detalleSeleccionado.classList.contains('detalles-activos')) {
        detalleSeleccionado.classList.remove('detalles-activos');
    } else {
        detalleSeleccionado.classList.add('detalles-activos');
    }
}

function ocultarDetalles(id) {
    // Cierra la sección seleccionada con animación
    const detalleSeleccionado = document.getElementById(id);
    detalleSeleccionado.classList.remove('detalles-activos');
}



