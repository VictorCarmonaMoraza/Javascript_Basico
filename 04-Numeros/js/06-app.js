
const numero1 = "20";
const numero2 = "20.2";



//Obtiene tipo de dato
console.log( typeof numero1);

//Convertir string a number
console.log(typeof Number.parseInt(numero1))

//Imprimimos la cadena numero
console.log(numero1);

//Despues de convertir cambia el color
console.log(Number.parseInt(numero1))

//Obtenemos el numero con decimales
console.log("Numero con decimales: "+Number.parseFloat(numero2))

const numero3 = "Uno";
//Intentamos convertir una cadena a numero
console.log(Number.parseInt(numero3));


const numero4 = 20;
//Comprobar si un numero es entero
console.log(Number.isInteger(numero4));
