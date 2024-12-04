// Referencias a los elementos
const personalInfoIcon = document.getElementById('personal-info');
const popup = document.getElementById('popup');
const closePopupButton = document.getElementById('close-popup');
const hackAnimation = document.getElementById('hack-animation');

// Abrir la ventana emergente
personalInfoIcon.addEventListener('click', () => {
    popup.style.display = 'block';
    startHackSimulation();
});

// Cerrar la ventana emergente
closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none';
});

function startHackSimulation() {
    hackAnimation.innerHTML = ''; // Limpia la animación

    // Crear el cursor parpadeante
    const cursor = document.createElement('div');
    cursor.id = 'cursor';
    hackAnimation.appendChild(cursor);

    // Reproducir el sonido de tecleado
    const audio = new Audio('assets/tecleado.wav'); // Ruta del archivo de sonido
    audio.loop = true; // Repite el sonido en bucle
    audio.play(); // Inicia el sonido

    // Generar líneas de texto
    let lines = 0;
    const interval = setInterval(() => {
        const line = document.createElement('p');
        line.textContent = generateRandomText();
        line.className = 'hack-line'; // Aplica el efecto de parpadeo
        hackAnimation.insertBefore(line, cursor); // Añade la línea antes del cursor
        lines++;
        if (lines > 20) clearInterval(interval);
    }, 200);

    // Finalizar el hackeo
    setTimeout(() => {
        audio.pause(); // Detiene el sonido
        audio.currentTime = 0; // Reinicia el sonido para la próxima vez
        alert('Hackeo completado. Redirigiendo al portafolio...');
        window.location.href = 'portfolio.html'; // Redirige al portafolio
    }, 5000); // Simula 5 segundos de hackeo
}

// Generar texto aleatorio
function generateRandomText() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let text = '';
    for (let i = 0; i < 50; i++) {
        text += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return text;
}

const trashIcon = document.getElementById('trash'); // Referencia a la papelera

trashIcon.addEventListener('click', () => {
    // Mostrar un mensaje de alerta personalizado con un emoji
    alert('⚠️ Aquí no hay nada que puedas utilizar, da clic a la carpeta.');
});