/* function declaration
function add (a, b) { return a + b; }

 neat way of declaring function
function add(
    a,
    b,
) {
    return a+b;
}

function add(a, b) {
    return a+b;
}
*/
 
// this is one way 
function add (a, b) {
    return a+b;
}


// 2. function express

const subtraction = function(a, b) {
    return a + b;
}

// 3. Arrow function (ES6 -> EcmaScript 6) (Expression function)
const multiply = (a, b) => {
    return a + b;
}
                 // `56` and `99` are values
                 // or also Know as passing arguments to add function
  const addition = add(56, 99);
  console.log(`Addition value is ${addition}`);
  // paramters (Variables defined in function)
  // Arguments (are actual values pass to function)

  const minus = subtraction(100 -150);
  console.log(`minus value is ${100 - 150}`);


  const mul = multiply(145, 456);
  console.log(`mul value is ${ mul}`);
