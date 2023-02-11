//const chalk = required("chalk");
import chalk from 'chalk';

console.log("Hi");
console.log("Hey!");

console.log( chalk.blue("Hello") );

console.log( chalk.bgRed("javascript functions"));

function dologin(){
    console.log("i'm logging from function")
}



// addition

function addition(inputone,inputtwo){
    console.log(chalk.blue(inputone));
    console.log(chalk.gray(inputtwo));

    const output = inputone - inputtwo;
    console.log (output) ;
}

addition(14, 50);