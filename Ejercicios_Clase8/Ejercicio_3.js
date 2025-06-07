//Suma de dos números ingresados por usuario
const prompt = require('prompt-sync')();

let numero1 = parseFloat(prompt('Ingresa un número: '));
let numero2 = parseFloat(prompt('Ingresa otro número: '));
let suma = numero1 + numero2;
console.log("La suma de",numero1 ,"y",numero2 ,"es: ",suma)