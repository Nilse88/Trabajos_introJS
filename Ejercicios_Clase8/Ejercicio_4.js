//Determinar si un número es par o impar
const prompt = require('prompt-sync')();
let numero = parseFloat(prompt('Ingresa un número entero: '));
let modulo = numero % 2

if (modulo != 0) {
    console.log("El número ingresado es impar");
}
 else {
    console.log("El número ingresado es par")
}
 