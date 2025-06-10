//Crear dos constantes con el valor mínimo y máximo que se quiere evaluar.
const prompt = require('prompt-sync')();
const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 99;
//Pedirle al usuario que ingrese se edad. 
let edad = parseInt(prompt("Ingrese su edad: "));
//Validar si la edad ingresada está dentro del rango declarado y mostrar mensaje correspondiente según se el caso.
if (edad >= EDAD_MINIMA && edad <= EDAD_MAXIMA) {
    console.log("Su edad se encuentra dentro del rango")
}
else {
    console.log("Su edad se encuentra fuera de rango");
}