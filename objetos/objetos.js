// CREACION DE UN OBJETO EN JAVASCRIPT 
// Estos ejemplos crean un objeto JavaScript con 4 propiedades: 
// --> 1 FORMA

const persona = {nombre:"Thomas", apellido:"Noriega", edad:18, colorOJos: "Cafe"};

//Mostrando datos del objeto

document.getElementById("demo").innerHTML = persona.nombre + " tiene " + persona.edad + " años." 

//-------------------------------------------------------


// Los espacios y saltos de linea no son importantes. Puede abarcar varias lineas 
// --> 2 FORMA

const segundaForma = {
    nombreDos : "Alex",
    apellidoDos : "Lainez",
    edadDos : 18,
    colorOjosDos : "Cafe"
};

//Mostrando datos del objeto

document.getElementById("demo2").innerHTML = segundaForma.nombreDos + " tiene " + segundaForma.edadDos + " años."

//-------------------------------------------------------


// Este ejemplo crea un objeto vacio y luego agrega 4 propiedades
// --> 3 FORMA

const terceraForma = {};

// Añadir propiedades

terceraForma.nombreTres = "Jonathan";
terceraForma.apellidoTres = "Licona";
terceraForma.edadTres = 22;
terceraForma.colorOjosTres = "Cafe";

// Mostrando datos del objeto

document.getElementById("demo3").innerHTML = terceraForma.nombreTres + " tiene " + terceraForma.edadTres + " años."

//-------------------------------------------------------


/* Usando la nueva palabra clave
Este ejemplo crea un nuevo objeto JavaScript usando new Object()y luego agrega 4 propiedades: */
// --> 4 FORMA

const cuartaForma = new Object();

// Añadir propiedades

cuartaForma.nombreCuatro = "Juan";
cuartaForma.apellidoCuatro = "Barrera";
cuartaForma.edadCuatro = 28;
cuartaForma.colorOjosCuatro = "Cafe";

// MOstrando datros del objeto

document.getElementById("demo4").innerHTML = cuartaForma.nombreCuatro + " tiene " + cuartaForma.edadCuatro + " años."