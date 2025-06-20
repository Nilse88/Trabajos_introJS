//Encuentra los multiplos de un número.
//Pedir al usuario ingresar un número entero positivo.
const prompt = require('prompt-sync')();
let numero = parseInt(prompt("Ingrese un número positivo: "));

//Mostrar los múltiplos del número ingresado por el usuario.
for (let multiplo = 1; multiplo <= 100; multiplo++) {
    console.log("Los multiplos de " + numero + " son = " + numero*multiplo);
    
}