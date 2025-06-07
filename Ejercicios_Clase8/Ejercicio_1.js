//Calcular el doble de un número, solicitando al usuario el ingreso de este
const prompt = require('prompt-sync')();
let numero = parseFloat(prompt('Ingresa un número: '));
//Calcular el doble de la variable numero
let doblenumero = numero * 2;
console.log("El doble de" ,numero ,"es:",doblenumero);

