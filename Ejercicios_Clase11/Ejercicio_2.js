//Semáforo inteligente.
//Pedir al usuario que ingrese un color del semáforo.
const prompt = require('prompt-sync')();
let color = prompt("Ingrese un color: ");

//Evaluar la variable color y mostrar mensaje según corresponda.
switch (color) {
    case "rojo":
        console.log("Alto, no puedes avanzar.");        
        break;
    case "amarillo":
        console.log("Precaución, prepárate para avanzar.");
        break;
    case "verde":
        console.log("Avanza con seguridad.");
        break;
    default:
        console.log("Color no reconocido, ingresa rojo, amarillo o verde.");
    
}
