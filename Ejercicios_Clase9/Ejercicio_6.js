//Establecer una variable que almacene el dato de edad ingresado por el usuario.
const prompt = require('prompt-sync')();
let edad = parseInt(prompt("Ingrese su edad: "));
//Evaluar el dato ingresado para la condición mayor o menor a 18 años, y mostrar mensaje por consola.
if (edad < 18) {
    console.log("La persona es menor de edad")
} 
else {
    console.log("La persona es mayor de edad")
}
