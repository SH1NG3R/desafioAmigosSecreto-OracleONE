// Crear el arreglo
let amigos = [];

// Función para mostrar un mensaje de bienvenida al cargar la página
window.onload = function() {
    alert('¡Bienvenido a Amigo Secreto!\nIngresa los nombres de tus amigos separados por comas y presiona "Añadir". Luego, presiona "Sortear amigo" para ver el resultado.');
}

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el valor de entrada
    const nombreInput = document.getElementById('amigo').value.trim();

    // Validar que no esté vacío
    if (nombreInput === '') {
        alert('El campo está vacío. Por favor, ingrese un nombre.');
        return;
    }

    // dividir los nombres por comas y agregar cada uno a la lista
    const nombres = nombreInput.split(',');
    for (let nombre of nombres) {
        const nombreTrim = nombre.trim();
        if (nombreTrim !== '') {
            amigos.push(nombreTrim);
            const listaAmigos = document.getElementById('listaAmigos');
            const nuevoLi = document.createElement('li');
            nuevoLi.textContent = nombreTrim;
            listaAmigos.appendChild(nuevoLi);
        }
    }

    // Limpiar el cuadro de entrada
    document.getElementById('amigo').value = '';
}

// Función para sortear al azar
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos en la lista. Por favor, añada algunos nombres.');
        return;
    }

    // Sortear un índice
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    // Mostrar el nombre Ganador
    document.getElementById('resultado').textContent = `El amigo secreto sorteado es: ${amigoSorteado}`;
}

// Función para resetear la lista de amigos
function resetearLista() {
    amigos = [];
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    document.getElementById('resultado').textContent = '';
}