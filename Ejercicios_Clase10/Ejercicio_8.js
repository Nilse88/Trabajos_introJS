//Convertidor de temperatura.
const prompt = require('prompt-sync')();
let temperatura = parseFloat(prompt("Ingrese la temperatura en grados celcius: "));
let Fahrenheit = temperatura * 9 / 5 + 32;
console.log("La temperatura: " + temperatura + " Cº es equivalente a " + Fahrenheit + " F ");
