//Calculadora de indice de masa corporal.
const prompt = require('prompt-sync')();
let peso = parseFloat(prompt("Ingrese su peso: "));
let estatura = parseFloat(prompt("Ingrese su altura en metros: "));
let imc = peso / (estatura * estatura);
console.log("Su IMC es: " + imc);
