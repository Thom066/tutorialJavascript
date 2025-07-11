//METODOS DE OBJETOS

/*
-Los métodos de objeto son acciones que se pueden realizar sobre objetos.
-Un método es una definición de función almacenada como un valor de propiedad .
*/

/*

const objeto = {
    nombre: "Thomas",
    edad: 30,
    saludar: function() {return this.nombre + " dice hola";}
}

*/

const persona = {
    nombre : "Thomas",
    apellido : "Noriega",
    edad : 18,
    fullName : function(){
        return this.nombre + " " + this.apellido;
    }
};

//mostrar los datos
document.getElementById("demo").innerHTML = persona.fullName();

/*

En el ejemplo anterior, thisse refiere al objeto persona :

this.firstName significa la propiedad firstName de la persona .

this.lastName significa la propiedad lastName de la persona .

*/

//-----------------------------------------------------


//ACCESO A METODOS DE OBJETOS
/*
--Se accede a un metodo de objeto con la siguiente sintaxis:

objetoNombre.methodoNombre(); 

*/

//si invoca la propiedad fullName del objeto persona, se ejecuta la función fullName y devuelve el nombre completo, ASI COMO SE HIZO EN EL PRIMER EJEMPLO DESDE LA LINEA 18

//si accede a la propiedad fullName sin () , devuelve la definicion de la función:

document.getElementById("demo2").innerHTML = persona.fullName; //devuelve la definicion de la funcion

