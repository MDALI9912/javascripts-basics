/*Functions are the backbone of JavaScript development, but perhaps the most difficult concept to master. The following section defines key concepts related to JS functions with practical examples that you can try on your own.

Anatomy of a Function
A function is a piece of code that can be called during the lifecycle of the app to perform a task or return a value. A function declaration can be broken down into the following pieces.

Name.
Parameters. A list of inputs that can be passed into a function.
Body. The logic or statements that perform the computation.
Example: function declaration
1.A function declaration on its own does not do anything.
2.You make use of functions by calling them.
3.The return value of the function can be assigned to a variable.

Function call. Executes the code inside the function body.
Arguments. The values are to be used as parameters in the function.
Return value. By default, functions will return undefined but can return the result of computation when the body contains a return statement.
Example: function call

*/

function mathOperation(a, b){  // hear a, b are two parameters
    console.log(`value of a = ${a}`);
    console.log(`value of b = ${b}`);

    const addition = a + b;
   const subtraction = a - b;
   const multiply = a * b;
   const division = a / b;
   const modulo = a % b;
  

    console.log(addition);
    console.log(subtraction);
    console.log(multiply);
    console.log(division);
    console.log(modulo);

}


// invoking / calling declared function
console.log("calling mathOperation function with no argument")
mathOperation(); // we are not pass any arguments 


console.log("calling mathOperations function with one arugument");
mathOperation(78);

console.log("calling mathOperation function with two arugument");
mathOperation(96, 100);