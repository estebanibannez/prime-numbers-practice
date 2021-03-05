class NumberPrime {
    numbers = [];

    constructor() {}

    //metodo de entrada del número 
    inputNumber(input) {
        // if(this.prime(input)){
        for (let numero = 2; numero <= input; numero++) {
            if (this.listNumbersPr(numero)) {
                this.numbers.push(numero)
            }
        }
        const arr = this.orderNumbers(this.numbers);
        this.printNumbers(arr, input);

        return arr;
        // }else{
        //     console.log(`${input} no es un número primo.`)
        // }

    }

    //valido si los números son primos
    listNumbersPr(numero) {
        for (let divisor = 2; divisor < numero; divisor++) {
            if (numero % divisor === 0) {
                return false;
            }
        }
        return true;
    }

    //ordeno los numeros en orden descendente
    orderNumbers(arr) {
        const numbersArray = arr.map((item) => {
            return item;
        }).reverse();
        return numbersArray;
    }

    //recibo el arreglo ordenado para imprimir.
    printNumbers(arr, num) {
        console.log(`Listado de números primos menores a ${num} son:`)
        arr.map((n) => {
            console.log(`> ${n}`)
        });

    }
    //validación si número es primo o no.
    prime(n) {
        let i = 0;
        let count = 0;
        let res = false;
        for (i = 1; i <= n; i++) {
            if (n % i == 0) {
                count = count + 1;
            }
        }
        if (count == 2) {
            res = true;
        } else {
            res = false;
        }

        return res;
    }

    validations(number) {
        if (typeof (number) != 'number' || !Number.isInteger(number)) {
            console.log('El argumento debe ser un número entero.')
            return false;
            // throw TypeError('El argumento debe ser un numero');
        }

        if (number <= 1) {
            console.log('El argumento debe ser un número entero positivo y mayor a 1')
            return false;
            // throw Error('El argumento debe ser un numero entero positivo');
        } else {
            return true;
        }
    }
}

module.exports = NumberPrime;