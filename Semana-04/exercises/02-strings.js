console.log('--EXERCISE 2: STRINGS');

// a- Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar 
// toUpperCase).

console.log('-Exercise 2.a: ');

var string = 'al menos 10 caracteres';

var resultA = string.toUpperCase();

console.log(resultA);

// b- Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 
// caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('-Exercise 2.b: ');

var string = 'al menos 10 caracteres';

var resultB = (string.substring(0, 5));

console.log(resultB);

// c- Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 
// caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('-Exercise 2.c: ');

var string = 'al menos 10 caracteres';

var resultC = (string.substring((string.length - 3), string.length));

console.log(resultC);

// d- Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra
// en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase,
// toLowerCase y el operador +).

console.log('-Exercise 2.d: ');

var string = 'al menos 10 caracteres';

var firstLetter = (string.substring((0), string.length - (string.length-1))).toUpperCase();
var restOfString = (string.substring(1, string.length)).toLowerCase();

var resultD = (firstLetter + restOfString);

console.log(resultD);

// e- Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición 
// del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

console.log('-Exercise 2.e: ');

var string = 'al menos 10 caracteres';

var space = ' ';

var resultE = string.indexOf(space);

console.log('El primer espacio en blanco esta en la pocision: ' + resultE);

// f- Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
// Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
// palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

console.log('-Exercise 2.f: ');

var string = 'eLeCtRoEnCeFaLoGrAfIsTa aNtIcOnStItUcIoNaLiDaD';

var space = ' ';

var firstSpace = string.indexOf(space);

var firstLetter = (string.substring((0), string.length - (string.length-1))).toUpperCase();
var restOfString = (string.substring(1, firstSpace)).toLowerCase();

var secondFirstLetter = (string.substring((firstSpace), firstSpace + 2)).toUpperCase();
var secondRestOfString = (string.substring(firstSpace + 2, string.length)).toLowerCase();

var resultF = firstLetter + restOfString + secondFirstLetter + secondRestOfString;

console.log(resultF);









