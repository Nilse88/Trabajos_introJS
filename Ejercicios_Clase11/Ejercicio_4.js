//Es par o inmpar?
//Pedir al usuario ingresar un número.
const prompt = require('prompt-sync')();
let numero = parseFloat(prompt("Ingrese un número: "));
let modulo = numero % 2;

//Indicar si el número ingresado es par o impar y mostrar mensaje por consola según sea el caso.
switch (modulo) {
    case 0:
         console.log("El número ingresado es par.");
         break;
    default:
         console.log("El número ingresado es impar.");
        ;
}