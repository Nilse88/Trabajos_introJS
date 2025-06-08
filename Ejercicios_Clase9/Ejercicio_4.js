//Declarar una variable para nombre y pedir al usuario que ingrese su nombre
const prompt = require('prompt-sync')();
let nombre = prompt("Ingresa tu nombre: ");
//Declarar mi nombre como constante
const miNombre = "Nilse";
//Comparar el dato ingresado por el usuario con la constante creada
if (nombre != miNombre) {
    console.log("No tenemos el mismo nombre")
}
else {console.log("Nuestros nombres son iguales")

}
