console.log('--EXERCISE 4: IF ELSE');

// a- Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5
// mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.

console.log('-Exercise 4.a: ');

var randomNumber = Math.random();

if (randomNumber > 0.5) {
    alert('Greater than 0,5');
} else {
    alert('Lower than 0,5');
}

// b- Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:

console.log('-Exercise 4.b: ');

var age = Math.random() * 100;

switch (true) {
    case (age < 2):
        alert('Bebe');
        break;

    case age >= 2 && age < 13:
        alert('Niño');
        break;

    case age >= 13 && age < 20:
        alert('Adolescente');
        break;

    case age >= 20 && age < 31:
        alert('Joven');
        break;

    case age >= 31 && age < 61:
        alert('Adulto');
        break;

    case age >= 61 && age < 75:
        alert('Adulto mayor');
        break;

    case age >= 75:
        alert('Anciano');
        break;

    default:
        break;
};

