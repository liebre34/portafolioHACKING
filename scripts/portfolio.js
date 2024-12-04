// Formulario de contacto
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Me pondré en contacto pronto.');
    e.target.reset();
});
