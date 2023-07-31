
/* CREO UN CONSTRUCTOR CON OBJETOS Y ARRAY */

const Juego = function (nombre, categoria, precio, stock){
    this.nombre = nombre
    this.categoria = categoria
    this.precio = precio
    this.stock = stock
}

let juego1 = new Juego("broforce", "accion", 1050, 20)
let juego2 = new Juego("callofdutymw2", "accion", 6990, 100)
let juego3 = new Juego("reddeadredemption2", "aventura", 11299, 50)
let juego4 = new Juego("sonsoftheforest", "aventura", 2100, 30)
let juego5 = new Juego("baldursgate", "rol", 9999, 40)
let juego6 = new Juego("eldenring", "rol", 12399, 150)
let juego7 = new Juego("civilizationvi", "estrategia", 504, 200)
let juego8 = new Juego("ageofempire2definitiveedition", "estrategia", 3999, 120)
let juego9 = new Juego("fifa23", "deportes", 8999, 300)
let juego10 = new Juego("forzahorizon5", "deportes", 11999, 65)


let listaDeJuegos = [juego1, juego2, juego3, juego4, juego5, juego6, juego7, juego8, juego9, juego10]


/* CREO LAS FUNCIONES PARA FILTRAR Y AGREGAR JUEGOS */


function filtrarJuego() {
    let palabraClave = prompt("Ingrese el nombre del juego que desea filtrar.");
    if (palabraClave === null || palabraClave.trim() === "") {
        alert("No se ingresó un nombre de juego válido.");
        return;
    }
    palabraClave = palabraClave.trim().toLowerCase().replace(/\s+/g, "");

    let resultado = listaDeJuegos.filter((juego) => juego.nombre.includes(palabraClave));

    if (resultado.length > 0) {
        console.table(resultado);
    } else {
        alert("No se encontró ninguna coincidencia con: " + palabraClave + ".");
    }
}


function agregarJuego(){
    let nombre = prompt("Ingresa el nombre del juego.");
    if (nombre === null || nombre.trim() === "") {
        alert("No se ingresó el nombre del juego.");
        return;
    }
    nombre = nombre.trim().toLowerCase().replace(/ /g, "");

    let categoria = prompt("Ingresa la categoría del juego.");
    if (categoria === null || categoria.trim() === "") {
        alert("No se ingresó la categoría del juego.");
        return;
    }
    categoria = categoria.trim().toLowerCase().replace(/ /g, "");

    let precioString = prompt("Ingresa el precio del juego.");
    if (precioString === null) {
        alert("No se ingresó el precio del juego.");
        return;
    }
    precioString = precioString.replace(/\s/g, ""); 
    let precio = parseInt(precioString);

    if (isNaN(precio)) {
        alert("Por favor, ingresa un valor numérico válido para el precio.");
        return;
    }

    let stockString = prompt("Ingresa el stock del juego.");
    if (stockString === null) {
        alert("No se ingresó el stock del juego.");
        return;
    }
    stockString = stockString.replace(/\s/g, ""); 
    let stock = parseInt(stockString);

    if (isNaN(stock)) {
        alert("Por favor, ingresa un valor numérico válido para el stock.");
        return;
    }

    let juego = new Juego(nombre, categoria, precio, stock);

    listaDeJuegos.push(juego);
    console.table(listaDeJuegos);
}


/* CREO LOS BOTONES PARA FILTRAR Y AGREGAR JUEGOS */


let boton = document.createElement("button");
boton.textContent = "Filtrar Juego";
boton.id = "btn";
document.body.appendChild(boton);
boton.addEventListener("click", filtrarJuego);


let boton2 = document.createElement("button");
boton2.textContent = "Agregar Juego";
boton2.id = "btn2";
document.body.appendChild(boton2);
boton2.addEventListener("click", agregarJuego);

