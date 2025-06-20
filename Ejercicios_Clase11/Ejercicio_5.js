//Encuentra los números pares entre dos valores.
//Pedir al usuario ingresar 2 números.
const prompt = require('prompt-sync')();
let numero1 = parseInt(prompt("Ingrese un número: "));
let numero2 = parseInt(prompt("Ingrese un número: "));

//Mostrar los números pares que se encuentran entre los números ingresados.

if (numero1 <= numero2){
    for (let par = numero1; par <= numero2; par++){
     if (par % 2 === 0){
    console.log("Los números pares entre los números ingresados son: " + par);
     }
    }
}
else {
    console.log("Los números ingresados son inválidos");

}