//creat a program to ask for the user's `first` and `last` name separately then greet the user with their full name.

const readline = require("readline-sync");
console.log("");
const age = readline.question("How old are you :  ");


console.log(`[In 10 years, your will be 32 year old.
               In 20 years, your will be 42 year old.
               In 30 years, your will be 52 year old. 
               In 40 years, your will be 62 year old.      ${age}`);