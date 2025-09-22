// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
    let amigos = []; 

    function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();

    if (nombre === "") {
        alert('Ingresa un nombre válido');
        return;
    }

    amigos.push(nombre);
    mostrarLista();
    input.value = ""; 
    }

    function mostrarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        let li = document.createElement('li');
        li.textContent = `${index + 1}. ${amigo}`;
        lista.appendChild(li);
    });
    }

    function sortearAmigo() {
    if (amigos.length === 0) {
        alert('La lista está vacía agrega un nombre');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let ganador = amigos[indiceAleatorio];

    amigos = [];
    document.getElementById('listaAmigos').innerHTML = "";

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> El amigo secreto es: ${ganador}</li>`;
    }