//Declarar 2 variables numericas que sean ingresadas por el usuario
const prompt = require('prompt-sync')();
let numero1 = parseFloat(prompt('Ingresa un número: '));
let numero2 = parseFloat(prompt('Ingresa otro número: '));
//Comparar las variables para establecer cual es mayor o si son iguales 
if (numero1 < numero2) {
    console.log("El número"+ numero2 +"es mayor a"+ numero1);
} 
  else if (numero1 == numero2) {
    console.log("Los números ingresados son iguales")
}
else {
    (console.log("El número"+ numero1 + "es mayor a"+ numero2));}

