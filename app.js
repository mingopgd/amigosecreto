// 1) Crear un array para almacenar nombres
let amigos = [];
// 2) Función para agregar amigos
function agregarAmigo() {    
const input = document.getElementById('amigo');    
const nombre = input.value.trim(); // Captura el valor y elimina espacios    
// Validar la entrada    
if (nombre === "") {        
	alert("Por favor, inserte un nombre.");        
	return;    
	}    
// Actualizar el array de amigos    
amigos.push(nombre);    
// Limpiar el campo de entrada    
input.value = '';    
// Mostrar la lista actualizada    
mostrarAmigos();
}
// 3) Función para mostrar amigos en la lista
function mostrarAmigos() {    
const lista = document.getElementById('listaAmigos');    
lista.innerHTML = ""; // Limpiar la lista existente    
// Iterar sobre el arreglo de amigos    
for (let i = 0; i < amigos.length; i++) {        
	const li = document.createElement('li'); // Crear un nuevo elemento <li>        
	li.textContent = amigos[i]; // Asignar el nombre al <li>        
	lista.appendChild(li); // Agregar el <li> a la lista    
}
}
// 4) Función para sortear un amigo
function sortearAmigo() {    
// Validar que haya amigos disponibles    
if (amigos.length === 0) {        
alert("No hay amigos para sortear.");        
return;    
}    
// Generar un índice aleatorio    
const indiceAleatorio = Math.floor(Math.random() * amigos.length);        
// Obtener el nombre sorteado    
const amigoSorteado = amigos[indiceAleatorio];    
// Mostrar el resultado    
const resultado = document.getElementById('resultado');    
resultado.innerHTML = `Amigo secreto sorteado: ${amigoSorteado}`;
}