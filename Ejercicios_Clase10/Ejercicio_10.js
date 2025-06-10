//Calculo de descuento.
const prompt = require('prompt-sync')();
let precio = parseFloat(prompt("Ingrese el precio del producto: "));
let descuento = parseFloat(prompt("Ingrese el porcentaje de descuento: "));
let precioNuevo = precio * (descuento/100);
console.log("El valor del descuento es: " + precioNuevo);
