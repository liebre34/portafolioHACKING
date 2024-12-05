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
                top: targetSection.offsetTop - 70, // Ajusta el desplazamiento si tienes un menú fijo
                behavior: 'smooth'
            });
        }
    });
});
