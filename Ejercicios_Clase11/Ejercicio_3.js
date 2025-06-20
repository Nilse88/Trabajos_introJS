//¿sabes contar?
//Pedir al usuario ingresar un número positivo.
const prompt = require('prompt-sync')();
let numero = parseFloat(prompt("Ingrese un número positivo: "));

//Contar desde 1 hasta el número ingresado y mostrar por consola
for (let contador = 1; contador <= numero; contador++) 
    {
    console.log("Contando.. " + contador);
    
}