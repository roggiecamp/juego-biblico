let nivelActual = 0;
let puntuacion = 0;
const niveles = Object.keys(preguntas);

function mostrarPregunta() {
    const nivel = niveles[nivelActual];
    const preguntaActual = preguntas[nivel][0]; // Solo una pregunta por nivel
    document.getElementById("nivel").innerHTML = `<h2>Nivel: ${nivel}</h2>`;
    document.getElementById("pregunta").innerHTML = `<p>${preguntaActual.pregunta}</p>`;

    const opcionesHTML = preguntaActual.opciones.map((opcion, index) => `
        <button onclick="verificarRespuesta(${index + 1}, ${preguntaActual.respuesta_correcta})">
            ${opcion}
        </button>
    `).join("");

    document.getElementById("opciones").innerHTML = opcionesHTML;
    document.getElementById("resultado").innerHTML = ""; // Limpiar resultado anterior
}

function verificarRespuesta(respuestaUsuario, respuestaCorrecta) {
    if (respuestaUsuario === respuestaCorrecta) {
        document.getElementById("resultado").innerHTML = "¡Correcto!";
        puntuacion++;
    } else {
        document.getElementById("resultado").innerHTML = `Incorrecto. La respuesta correcta era la opción ${respuestaCorrecta}.`;
    }
    nivelActual++;
    if (nivelActual < niveles.length) {
        mostrarPregunta();
    } else {
        document.getElementById("resultado").innerHTML = `¡Felicidades! Has completado todos los niveles con ${puntuacion} aciertos.`;
        document.getElementById("siguiente").style.display = "none";
    }
}

function siguientePregunta() {
    mostrarPregunta();
}

// Iniciar el juego
mostrarPregunta();
