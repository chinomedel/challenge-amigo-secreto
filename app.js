// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/* Variables globales */
var listaAmigos = [];

function agregarAmigo() {

    let nombre = document.getElementById('amigo').value; // Obtiene el valor del input con id 'nombre'
    console.log(nombre); // Imprime el nombre en la consola para depuración
    if(nombre == ''){
        alert('El campo no puede estar vacío'); // Muestra un mensaje de alerta si el campo está vacío
        return false; // Detiene la ejecución si el campo está vacío
    }else{
        listaAmigos.push(nombre.trim());
        return true; // Indica que se agregó correctamente
    }
}
