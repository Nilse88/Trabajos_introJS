//Declarar tres variables numéricas que sean ingresadas por el usuario.
const prompt = require('prompt-sync')();
let num1 = parseFloat(prompt('Ingresa un número: '));
let num2 = parseFloat(prompt('Ingresa un segundo número: '));
let num3 = parseFloat(prompt('Ingresa un tercer número: '));
//Evaluar los datos ingresados e imprimir por consola cual es el mayor de ellos.
if (num1 > num2 && num1 > num3) {
    console.log("El número mayor de los datos ingresados es: " + num1)
} else if (num2 > num1 && num2 > num3) {
    console.log("El número mayor de los datos ingresados es: " + num2)
} else {
    console.log("El número mayor de los datos ingresados es: " + num3)
}
    