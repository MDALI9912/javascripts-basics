// Expression function is a value or exprection by assigning an anoymous function to a variable or parameter,


import readline from 'readline-sync';
import chalk from "chalk";
                                            // default parameter values is assigned
const calculateBill = function(mealAmount, tip, texRate) {
    const total = mealAmount + texRate + tip;
    return total;

}

const customerMelAmount = readline.question("please enter meal amount: ");
const texRate = readline.question("what is the Tax Rate ? ");
const tipValue = readline.question("Aney tip amount ?:  ");

const totalBill = calculateBill(customerMelAmount, texRate, tipValue);

console.log(chalk.bgRed("Total Bill Amount: ") + chalk.bgGreen(totalBill) );