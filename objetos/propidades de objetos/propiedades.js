/* Un objeto es una colección desordenada de propiedades.
--Las propiedades son la parte más importante de los objetos de JavaScript.
--Las propiedades se pueden cambiar, agregar, eliminar y algunas son de solo lectura.
*/

//----------------------------------------------------

//ACCEDER A LAS PROPIEDADES DE JAVASCRIPT
//--la sintaxis para acceder a la propiedad de un objeto es:


//objetoNombre.propiedad
//objetoNombre["propiedad"]
//objetoNombre[expresion]

//----------------------------------------------------


//AGREGAR NUEVAS PROPIEDADES

const persona = {
    nombre: "Thomas",
    apellido: "Noriega"
}

// AGREGANDO

persona.nacionalidad = "Colombia";

// mostrando los datos
document.getElementById("demo").innerHTML = persona.nombre + " es de " +  persona.nacionalidad + ".";


//----------------------------------------------------


//ELIMINAR PROPIEDADES

delete persona.apellido;

// mostrando los datos

document.getElementById("demo2").innerHTML = "El apellido de " + persona.nombre + " es " + persona.apellido

//tambien se puede eliminar asi
//delete persona["apellido"];

