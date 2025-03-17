// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Challenge amigo secreto
// Cristian Ivan Florencio Figueroa
// CURP FOFC930313HMCLGR05
// 15/03/25
let amigos = [];

// funcion principal
function agregarAmigo() {
//agregar amigo
    const entradaAmigo = document.getElementById("amigo");
   
//agregar nombre y quitar espacios
    const nombreDeAmigo = entradaAmigo.value.trim();

    // vacios - sin entradas

    if (nombreDeAmigo) {
        // verificar cantidad y agregar
        if (amigos.length < 5) {
            amigos.push(nombreDeAmigo);
            // actualiza la lista
            actualizarLista();
            // borrar información
            entradaAmigo.value = "";
        } else {
            alert("Sólo puedes agregar 5 amigos");
        }
    } else {
        alert("Nombre necesario, puedes agregar hasta 5 nombres");
    }
}

// una sola linea
/*
function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; 

    amigos.forEach(amigo => {
        const listaAgregar = document.createElement("listaAgregar");
        listaAgregar.textContent = amigo;
        listaAmigos.appendChild(listaAgregar);
    });
*/


// funcion actualizar amigos
function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; 

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });

}

// funcion sorteo
function sortearAmigo() {

    // Revisar lista
    
    if (amigos.length === 0) {
        alert("Debes agrega un nombre primero");
        return;
    }

    // eleccion aleatoria
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // indica el resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>El amigo sorteado es: <strong>${amigoSorteado}</strong></p>`;
}
