
const readline = require ('readline-sync');


// output welcome massage
console.log("Welcome to input and output program");

// ask user name from the input question
const username = readline.question("please specify your name: ");
console.log(`hello ${username}, welcome to our program`);