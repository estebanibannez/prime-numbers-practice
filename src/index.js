const readline = require('readline-sync');
const NumberPrime = require('./numeros/numeros');

console.log(`===========|| LISTADO NUMEROS PRIMOS  ||===========`);
number = parseInt(readline.question(`INGRESE UN NÚMERO : `));

const calculateNumbers = new NumberPrime();

try {
    if (typeof(number) != 'number') {
        console.log('El argumento debe ser un numero')
        throw TypeError('El argumento debe ser un numero');
    }
    if(!Number.isInteger(number)){
        console.log('El argumento debe ser un número entero.')
        // throw TypeError('El argumento debe ser un número entero.');
    }
    if(number <= 1){
        console.log('El argumento debe ser un número entero positivo y mayor a 1')
        // throw Error('El argumento debe ser un numero entero positivo');
    } 
    else {
        //si cumple las condiciones ejecuto el metodo de la clase.
        calculateNumbers.inputNumber(number);
    }
} catch (error) {
    throw Error(`Ocurrió un error ${ error }`);
}


//calculate

// imprimir pantalla