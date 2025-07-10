//OBJETOS ANIDADOS
//-- los valores de propiedad de un objeto pueden ser otros objetos:


miObjeto = {
    name: "Thomas",
    edad: "18",
    misCarros : {
        carro1 : "Toyota",
        carro2 : "BMW",
        carro3 : "Mazda",
        carro4 : "Mercedez Benz"
    }
}


//Puede acceder a objetos anidados utilizando la notacion de puntos o la notacion de corchetes:

//--> 1)
//miObjeto.misCarros.carro2;
document.getElementById("demo").innerHTML = miObjeto.misCarros.carro2;


//--> 2)
//miObjeto.misCarros["carro1"];
document.getElementById("demo2").innerHTML = miObjeto.misCarros["carro1"]


//--> 3)
//miObjeto["misCarros"]["carro3"]
document.getElementById("demo3").innerHTML = miObjeto["misCarros"]["carro3"]


//-->4)
/* 
let p1 = "misCarros";
let p2 = "carro4";
miObjeto[p1][p2];
*/
let p1 = "misCarros";
let p2 = "carro4";
document.getElementById("demo4").innerHTML = miObjeto[p1][p2];

