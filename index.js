/* const opcionesRadio = document.querySelectorAll('input[type="radio"]');

opcionesRadio.forEach((opcion) => {
  opcion.addEventListener('change', () => {
    alert(`Ha seleccionado la opción ${opcion.value}`);
  });
}); */

const boton = document.querySelector('.buttom');

boton.addEventListener('click', (event) => {
  event.preventDefault(); 

  const respuestas = [];
  
  const preguntas = document.querySelectorAll('section');

   preguntas.forEach((pregunta) => {
    
    const opciones = pregunta.querySelectorAll('input[type="radio"]');

       opciones.forEach((opcion) => {
      // Si la opción está marcada, agregar su valor al array de respuestas
      if (opcion.checked) {
        respuestas.push(opcion.value);
      }
    });
  });

  // Mostrar las respuestas en un mensaje de alerta
  alert(`Tus respuestas son: ${respuestas.join(', ')}`);
});  