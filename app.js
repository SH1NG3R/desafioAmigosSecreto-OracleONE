// Crear el reglo
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const nombreInput = document.getElementById('amigo').value.trim();

    // Validar que el campo no esté vacío :3
    if (nombreInput === '') {
        alert('El campo está vacío. Por favor, ingrese un nombre.');
        return;
    }

    // Agregar el nombre a la lista y al DOM
    amigos.push(nombreInput);
    const listaAmigos = document.getElementById('listaAmigos');
    const nuevoLi = document.createElement('li');
    nuevoLi.textContent = nombreInput;
    listaAmigos.appendChild(nuevoLi);

    // Limpiar el campo
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

    // Mostrar el nombre Ganador en pantalla
    document.getElementById('resultado').textContent = `El amigo secreto sorteado es: ${amigoSorteado}`;
}
