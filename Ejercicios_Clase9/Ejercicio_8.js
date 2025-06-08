//Establecer variables para almacenar las longitudes de un triangulo, las cuales seran ingresadas por consola.
const prompt = require('prompt-sync')();
let lado1 = parseFloat(prompt("Ingrese la langitud de uno de los lados del triangulo: "));
let lado2 = parseFloat(prompt("Ingrese la langitud de otro de los lado del triangulo: "));
let lado3 = parseFloat(prompt("Ingrese la langitud del último de los lados del triangulo: "));
//Determinar de qué triangulo se trata, evaluando las condiciones establecidas para cada uno y mostrar mensaje por pantalla.
if (lado1 != lado2 && lado1 != lado3) {
    console.log("Según los datos ingresados se trata de un triangulo escaleno")
}
else if(lado1 != lado3) {
    console.log("Según los datos ingresados se trata de un triangulo isósceles")
}
else {console.log("Según los datos ingresados se trata de un triangulo equilátero");
}
