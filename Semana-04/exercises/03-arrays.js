console.log('--EXERCISE 3: ARRAYS');

//  a- Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
// "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).

console.log('-Exercise 3.a: ');

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
    "Noviembre", "Diciembre"];

console.log('El mes 5 es: ' + months[4] + ' y el mes 11 es: ' + months[10]);

// b- Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

console.log('-Exercise 3.b: ');

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
    "Noviembre", "Diciembre"];

var resultB = months.sort();

console.log(resultB);

// c- Agregar un elemento al principio y al final del array (utilizar unshift y push).

console.log('-Exercise 3.c: ');

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
    "Noviembre", "Diciembre"];

months.unshift('PrimerElemento');
months.push('UltimoElemento');

var resultC = months;

console.log(resultC);

// d- Quitar un elemento del principio y del final del array (utilizar shift y pop).

console.log('-Exercise 3.d: ');

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
    "Noviembre", "Diciembre"];

months.shift();
months.pop();

var resultD = months;

console.log(resultD);

// e- Invertir el orden del array (utilizar reverse).

console.log('-Exercise 3.e: ');

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
    "Noviembre", "Diciembre"];

var resultE = months.reverse();

console.log(resultE);

// f- Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

console.log('-Exercise 3.f: ');

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
    "Noviembre", "Diciembre"];

var resultF = months.join('-');

console.log(resultF);

// g- Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

console.log('-Exercise 3.g: ');

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
    "Noviembre", "Diciembre"];

var resultG = months.slice(4, 11);

console.log(resultG);



