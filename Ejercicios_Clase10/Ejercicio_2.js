//Declarar 3 variables donde se pida al usuario que ingrese cada una de ellas.
const prompt = require('prompt-sync')();
let nombre = (prompt("Ingrese un nombre: "));
let edad = parseInt(prompt("Ingrese su edad: "));
let peso = parseFloat(prompt("Ingrese su peso: "));
//Se muestran por pantalla los datos ingresados.
console.log("Los datos ingresados son: ");
console.log("Nombre: " + nombre);
console.log("Edad: " + edad + " años ");
console.log("Peso: " + peso + " Kg");

