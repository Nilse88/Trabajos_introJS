//Verificar si un número es positivo, negativo o cero
const prompt = require('prompt-sync')();

let numero = parseFloat(prompt('Ingresa un número: '));
  
if (numero > 0) {
    console.log("El número es positivo.");

 } else if(numero <0) {   
    console.log("El número es negativo.");        
}
  else{
    console.log("El número es cero.");
}
