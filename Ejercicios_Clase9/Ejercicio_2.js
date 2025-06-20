//Definir 2 constantes
const prompt = require('prompt-sync')();
const RANGO_MINIMO = 10;
const RANGO_MAXIMO = 50;
//Pedir al usuario que ingrese un número
let numero = parseFloat(prompt('Ingresa un número: '));
// Verificar si el número ingresado se encuentra dentro del rango definido por las constantes.
if (numero >= RANGO_MINIMO && numero <= RANGO_MAXIMO) {
    console.log("El número " + numero + " se encuentra dentro del rango definido");
} else {
    console.log("El número " + numero + " no se encuentra dentro del rango definido");
}
