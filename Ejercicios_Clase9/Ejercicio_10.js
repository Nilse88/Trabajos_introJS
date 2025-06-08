//Definir una variable para el ingreso por consola de un dato numérico.
const prompt = require('prompt-sync')();
let num = parseInt(prompt("Ingrese un número: "));
//Determinar si el dato ingresado está en el rango establecido y mostrar por pantalla lo que corresponda
if (num == 1) {
    console.log("El número ingresado corresponde al día Lunes")
}
else if(num == 2) {
    console.log("El número ingresado corresponde al día Martes")
}
else if(num == 3) {
    console.log("El número ingresado corresponde al día Miércoles")
}
else if(num == 4) {
    console.log("El número ingresado corresponde al día Jueves")
}
else if(num == 5) {
    console.log("El número ingresado corresponde al día Viernes")   
}
else if(num == 6) {
    console.log("El número ingresado corresponde al día Sábado")
}
else if(num == 7) {
    console.log("El número ingresado corresponde al día Domingo")
}
else {
    console.log("El dato ingresado es erróneo");

}