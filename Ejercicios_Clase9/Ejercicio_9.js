//Definir una constante con el valor de pi.
const prompt = require('prompt-sync')();
const pi = 3.14159;
//Definir variables para el valor del radio, perimétro y área del círculo.
//Pedir al usuario que ingrese valor del radio.
let radio = parseFloat(prompt("Ingrese el valor del radio del círculo: "));
let perimetro = 2 * pi * radio ;
let area = pi * radio * radio;
console.log("El perimetro del círculo es: " + perimetro);
console.log("El área del círculo es: " + area);


