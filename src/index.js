const readline = require('readline-sync');
const NumberPrime = require('./numeros/numeros');

console.log(`===========|| LISTADO NUMEROS PRIMOS  ||===========`);
number = parseInt(readline.question(`INGRESE UN NÚMERO : `));

const calculateNumbers = new NumberPrime();

try {
    if (calculateNumbers.validations(number)) {
        calculateNumbers.inputNumber(number);
    }
} catch (error) {
    throw Error(`Ocurrió un error ${ error }`);
}


//calculate

// imprimir pantalla