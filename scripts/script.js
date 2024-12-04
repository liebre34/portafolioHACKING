// Selecciona el contenedor del fondo animado
const terminalBackground = document.getElementById('background-terminal');

// Generar texto aleatorio tipo terminal
function generateRandomText() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let text = '';
    for (let i = 0; i < 40; i++) {
        text += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return text;
}

// Crear una línea de texto animado
function createHackText() {
    const hackText = document.createElement('div');
    hackText.className = 'hack-text';
    hackText.textContent = generateRandomText();

    // Posición horizontal aleatoria
    hackText.style.left = `${Math.random() * 100}%`;

    // Posición inicial fuera de la pantalla
    hackText.style.top = `${-20 + Math.random() * 20}vh`;

    // Velocidad de animación aleatoria
    hackText.style.animationDuration = `${5 + Math.random() * 10}s`;

    terminalBackground.appendChild(hackText);

    // Eliminar el texto después de que termine la animación
    setTimeout(() => {
        terminalBackground.removeChild(hackText);
    }, 8000);
}

// Generar líneas cada 200ms
setInterval(createHackText, 200);

// Funcionalidad de botones
document.getElementById('no-knowledge').addEventListener('click', () => {
    window.location.href = 'retroDesk.html';
});

document.getElementById('has-knowledge').addEventListener('click', () => {
    window.location.href = 'hackTheBox.html';
});