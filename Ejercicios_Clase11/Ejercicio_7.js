//Calculadora simple.
//Pedir al usuario ingresar 2 números.
const prompt = require('prompt-sync')();
let numero1 = parseFloat(prompt("Ingrese un número: "));
let numero2 = parseFloat(prompt("Ingrese un número: "));
let operacion = prompt("Ingrese la operación que desea realizar: suma, resta, multiplicación o división: ");
let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicación = numero1 * numero2;
let división = numero1 / numero2;
//Según la operación selecccionada por el usuario se mostrará el resultado.
switch (operacion) {
    
    case "suma":
        console.log("La suma de los números ingresados es: " + suma);
        break;
    case "resta":
        console.log("La resta de los números ingresados es: " + resta);
        break;
    case "multiplicacion":
        console.log("La multiplición de los números ingresados es: " + multiplicación);
        break;
    case "division":
        console.log("La división de los números ingresados es: " + división);
        break;
    default:
        console.log("La opción ingresada no es válida");
        
}