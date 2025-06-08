//Declarar dos variables booleanas y pedir al usuario ue las ingrese por consola.
const prompt = require('prompt-sync')();
let condicion1 = (prompt("Ingrese un valor booleano, true o false: "));
let condicion2 = (prompt("Ingrese un valor booleano, true o false: "));
//Convertir los datos string en booleanos
let cond1 = (condicion1 == "true");
let cond2 = (condicion2 == "true");

let result1 = cond1 && cond2;
let result2 = cond1 || cond2;
let result3 = ! cond1;
let result4 = ! cond2;

// Se muestran resulatados de las combinaciones lógicas
console.log("Combinaciones lógicas: ");
console.log(condicion1 + " && " + condicion2 + " : " + result1 );
console.log(condicion1 + " or " + condicion2 + " : " + result2);
console.log("NOT " + condicion1 + " : " + result3);
console.log("NOT " + condicion2 + " : " + result4);


