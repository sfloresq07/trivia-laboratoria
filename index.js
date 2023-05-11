/* const opcionesRadio = document.querySelectorAll('input[type="radio"]');

opcionesRadio.forEach((opcion) => {
  opcion.addEventListener('change', () => {
    alert(`Ha seleccionado la opción ${opcion.value}`);
  });
}); */

function verResultados() {
  const opcionesSeleccionadas = document.querySelectorAll('input[type="radio"]:checked');

  if (opcionesSeleccionadas.length === 0) {
    alert("Por favor seleccione una opción.");
    return;
  }

  let respuestasCorrectas = 0;
  let respuestasIncorrectas = 0;

  opcionesSeleccionadas.forEach(opcion => {
    if (opcion.classList.contains("correct")) {
      respuestasCorrectas++;
    } else {
      respuestasIncorrectas++;
    }
  });

  alert(`Respuestas correctas: ${respuestasCorrectas}\nRespuestas incorrectas: ${respuestasIncorrectas}`);

  const opcionesIncorrectasSeleccionadas = document.querySelectorAll('input[type="radio"].incorrect:checked');

  opcionesIncorrectasSeleccionadas.forEach(opcion => {
    const pregunta = opcion.name.replace("radio", "");
    const respuestaCorrecta = document.querySelector(`input[type="radio"].correct[name="radio${pregunta}"]`).value;
    alert(`La respuesta seleccionada para la pregunta ${pregunta} es incorrecta. La respuesta correcta es: ${respuestaCorrecta}`);
  });
} 
    