console.log('--EXERCISE 1: VARIABLES AND OPERATORS');

// a- Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.

console.log('-Exercise 1.a: ');

var firstVariable = 1;
var secondVariable = 2;

var resultA = firstVariable + secondVariable;

console.log(resultA);

// b- Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.

console.log('-Exercise 1.b: ');

var firstString = "Hola";
var secondString = "mundo!";

var resultB = (firstString + ' ' + secondString);

console.log(resultB);

// c- Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado de la suma en una 3er variable (utilizar length).

console.log('-Exercise 1.c: ');

var firstString = "El largo de la suma de "; 
var secondString = "estos 2 strings es: " ;

var resultC = (firstString.length + secondString.length);

console.log(firstString + secondString, resultC);