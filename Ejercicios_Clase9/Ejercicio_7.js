//Establecer una variable que almacene el dato de peso de un usuario pedido por consola.
const prompt = require('prompt-sync')();
let peso = parseFloat(prompt("Ingrese su peso en kg: "));
//Transformar el dato ingresado a otro sistema de unidades y mostrarlo por pantalla.
let nuevopeso = (peso * 2.20462)
console.log("Tu peso: " + peso + " en kg es equivalente a " + nuevopeso + " libras")

