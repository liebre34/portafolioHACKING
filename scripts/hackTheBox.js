// Variables principales
const output = document.getElementById('output');
const input = document.getElementById('input');
const submit = document.getElementById('submit');
const encryptedFile = document.getElementById('encrypted-file');

// Contraseña secreta
const secretPassword = "desafio123";

// Archivo cifrado (ROT13)
const encryptedText = `
Uryyb, guvf vf n frperg fcnpr.
Gur frperg fcnpr vf: qrfnsvb123
Dhvpx orpnhfr gur fcnpr vf pbqrq.
`;

// Mostrar archivo cifrado en el terminal
encryptedFile.textContent = encryptedText;

// Función de descifrado ROT13
function rot13(str) {
    return str.replace(/[A-Za-z]/g, (char) =>
        String.fromCharCode(
            char.charCodeAt(0) + (char.toLowerCase() < 'n' ? 13 : -13)
        )
    );
}

// Evento de envío
submit.addEventListener('click', () => {
    const userInput = input.value.trim();

    if (userInput === secretPassword) {
        output.innerHTML += "\n> Contraseña correcta. ¡Felicidades, has completado el desafío!";
        setTimeout(() => {
            alert('Redirigiendo al portafolio...');
            window.location.href = 'portfolio.html'; // Redirige al portafolio
        }, 2000);
    } else {
        output.innerHTML += `\n> "${userInput}" no es correcto. Intenta de nuevo.`;
    }

    input.value = ''; // Limpia el campo de texto
    output.scrollTop = output.scrollHeight; // Hace scroll hacia abajo
});

// Pista adicional
setTimeout(() => {
    output.innerHTML += "\n> Pista: Usa ROT13 para descifrar el archivo.";
    output.scrollTop = output.scrollHeight;
}, 5000);
