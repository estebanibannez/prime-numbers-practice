const NumbersPrime = require('../numeros/numeros');
// import numbersPrime from '../numeros/numeros';

const numbersPrime = new NumbersPrime();

describe('Números primos', () => {

     it('Test con número 15 , Debe retornar una lista de números primos de longitud 6', () => {
          const res = numbersPrime.inputNumber(15);
          console.log('numms.',res.length)
          expect(res.length).toBe(6);
     });

     it('Valida número primo ejm num primo: 7,  devuelve verdadero ya que es número primo.', () => {
          const res = numbersPrime.prime(7);
          expect(res).toBe(true);
     });

     it('Debe retornar un arreglo en reversa', () => {
          const arrayTest = [2, 3, 5, 7, 11, 13];
          const arrayTestReverse = [13, 11, 7, 5, 3, 2];
          const exp = numbersPrime.orderNumbers(arrayTest);
          // console.log(exp)
          expect(exp).toStrictEqual(arrayTestReverse);
     });

     it('Test con string A,  Debe devolver falso', () => {
         
          const exp = numbersPrime.validations('A');
          console.log(exp)
          expect(exp).toBe(false);
     });

     it('Test con int -1,  Debe devolver falso , permite solo numeros positivos', () => {
         
          const exp = numbersPrime.validations(-1);
          expect(exp).toBe(false);
     });
});