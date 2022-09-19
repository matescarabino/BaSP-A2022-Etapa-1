console.log('--EXERCISE 6: FUNCTIONS');

// a- Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el
// resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

console.log('-Exercise 6.a: ');

function sum(firstNum, secondNum){
    var result = firstNum + secondNum;
    return result;
};

var resultA = sum(2,3);

console.log(resultA);

// b- A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número;
// de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como
// resultado.

console.log('-Exercise 6.b: ');

function sumB(firstNum, secondNum) {

    if ((typeof(firstNum) != 'number') || (typeof(secondNum) != 'number')) {
        alert('Error in entered parameters');
        return NaN;
    } else {
        var result = firstNum + secondNum;
        return result;
    };
};

var resultB = sumB(2, 'a');

console.log(resultB);

// c- Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero si es un
// número entero.

console.log('-Exercise 6.c: ');

function validateInt(num){

    if(Number.isInteger(num)){
        return true;
    }else{
        return false;
    };

};

var resultC = validateInt(2.1);

console.log(resultC);

// d- A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que valide que los
// números sean enteros. En caso que haya decimales mostrar un alerta con el error y retornar el número convertido a
// entero (redondeado).

console.log('-Exercise 6.d: ');

function sumD(firstNum, secondNum) {

    if ((typeof(firstNum) != 'number') || (typeof(secondNum) != 'number')) {
        alert('Error in entered parameters');
        return NaN;
    } else {
        if (validateInt(firstNum)) {
            if (validateInt(secondNum)) {
                var result = firstNum + secondNum;
                return result;
            }else {
                alert('The second parameter is not integer');
                return Math.round(secondNum);
            }
        } else if (validateInt(secondNum)) {
            alert('The first parameter is not integer');
            return Math.round(firstNum);
        }
    };
};

var resultD = sumD(2, 7.1);

console.log(resultD);

// e- Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma 
// que todo siga funcionando igual.

console.log('-Exercise 6.e: ');

function validateIntE(firstNum, secondNum){
    if (!validateInt(firstNum)) {
        alert('The first parameter is not integer');
        return Math.round(firstNum);
    }
    if (!validateInt(secondNum)) {
        alert('The second parameter is not integer');
        return Math.round(secondNum);
    }
    return true;
};

function sumE(firstNum, secondNum){

    var validateInt =  validateIntE(firstNum, secondNum);

    if(validateInt != true){
        return validateInt;
    };

    var result = firstNum + secondNum;
    return result;
};

var resultE = sumE(2.1,3);

console.log(resultE);




