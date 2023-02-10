//wright a dynamic greeter program named greerer.js the program shold ask for yor nmae,then output `hello`and name
const readline = require("readline-sync");
console.log("");

const name = readline.question("what is u r name ?:");

console.log(`hello ${name} `);


//creat a program to ask for the user's `first` and `last` name separately then greet the user with their full name.

const readline = require("readline-sync");
console.log("");
const first_name = readline.question("what is u r first name ? ");
const last_name = readline.question("what is u r last name ? ");


console.log(`hello ${first_name} ${last_name}`);