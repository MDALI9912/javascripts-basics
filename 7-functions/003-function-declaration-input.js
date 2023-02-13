//const readline = require('readline-sync');   this not working
import readline from 'readline-sync';

const firstvalue = readline.question(`pleas enter the value of a =`);
const secondvalue = readline.question(`pleas enter the value of b =`);
// declaring a function
function maths(valueOne, valueTwo){
    console.log (`value of a is ${valueOne}`);
    console.log (`value of b is ${valueTwo}`);

    const addition = valueOne + valueTwo;
    const subtraction = valueOne - valueTwo;
    const multiply = valueOne * valueTwo;
  const division = valueOne / valueTwo;
    const Modulo = valueOne % valueTwo;
    

    console.log(`addition of ${valueOne} and $ {valueTwo} is ${addition}`);
    console.log(`subtraction of ${valueOne} and ${valueTwo} is ${subtraction}`);
    console.log(`multiply of ${valueOne} and ${valueTwo} is ${multiply}`);
    console.log(`division of ${valueOne} and ${valueTwo} is ${division}`);
    console.log(`Modulo of ${valueOne} and ${valueTwo} is ${Modulo}`);

}

maths(firstvalue, secondvalue);