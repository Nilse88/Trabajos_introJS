//¿Positivo, negativo o cero?
//Pedir al usuario un número cualquiera.
const prompt = require ('prompt-sync')();
let numero = prompt("Ingrese un número: ");

//Mostrar por pantalla el mensaje que corresponda según la evaluación de la variable numero.
let mensaje = numero < 0 ? "El número ingresado es negativo": (numero > 0 ? "El número ingresado es positivo": "El número ingresado es cero");

console.log(mensaje);




