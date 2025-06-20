//Tabla de multiplicar.
//Pedir al usuario ingresar un número.
const prompt = require('prompt-sync')();
let numero = parseInt(prompt("Ingrese un número: "));

//Imprimir la tabla de multiplicar del número ingresado.
for (let tabla = 1; tabla <= 10; tabla++) {
    console.log("La tabla de multiplicar de " + numero + " es: " )
console.log(numero + " * " + tabla + " = " + numero*tabla);
    
}
