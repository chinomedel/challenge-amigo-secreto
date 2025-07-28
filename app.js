// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/* Variables globales */
var amigos = [];

function agregarAmigo() {

    let nombreAmigo = document.getElementById('amigo').value; // Obtiene el valor del input con id 'nombre'
    if(nombreAmigo == ''){
        alert('Por favor, inserte un nombre.'); // Muestra un mensaje de alerta si el campo está vacío
        return false; // Detiene la ejecución si el campo está vacío
    }else{
        if(amigos.includes(nombreAmigo)) { // Verifica si el nombre ya está en la lista
            alert('El nombre ya está en la lista'); // Muestra un mensaje de alerta si el nombre ya existe
            return false; // Detiene la ejecución si el nombre ya está en la lista
        }else{
            amigos.push(nombreAmigo);
            limpiarInput()
            mostrarAmigos(); // Llama a la función para mostrar los amigos en la lista
            return true; // Indica que se agregó correctamente
        }
    }
}

// Limpia el input luego de agregar el nombre de un amigo
function limpiarInput() { 
    document.getElementById('amigo').value = ''; // Limpia el campo de entrada
}

// funcción que muestra a los amigos
function mostrarAmigos() {
    let amigosList = document.getElementById('listaAmigos'); // Obtiene el elemento donde se mostrarán los amigos
    amigosList.innerHTML = ''; // Limpia la lista antes de mostrar los amigos
    for (let i = 0; i < amigos.length; i++) {
        amigosList.innerHTML += `<li>${amigos[i]}</li>`; // Agrega cada amigo a la lista
    }
}

// Función para sortear al amigo secreto
function sortearAmigo() {    
    if (amigos.length === 0){
        alert('No hay amigos en la lista para sortear'); // Muestra un mensaje de alerta si la lista está vacía
        return false; // Detiene la ejecución si no hay amigos
    }else{
        const amigoSeleccionado = Math.floor(Math.random() * amigos.length);
        document.getElementById('resultado').innerHTML = `Tu amigo secreto es: ${amigos[amigoSeleccionado]}`; // Muestra el amigo secreto seleccionado
    }
   
}

// Imprime la lista de amigos en la consola para depuración
console.log(amigos);