// we develop our program (solutions) based on available values

// string
// Number 
// Boolean
// undefined
// null

// object {Key: values, key2: value2}
// Array [value, value2, value3, {}, [], function() {} ]

// function(value, value2, value3,.....) {}


// Exampule

//function add (a, b, c) {
 //   return a + b + c;
//}


//console.log( add(1,2,3));  // answer is 6

function multiply(x, y, z) {
    const total = x * y * z;
    return total;
}


console.log(multiply(1, 2, 3));


function add(x) {
    return function(y)  {
        return function(z) {
            return y + x + z; 
        }
    }
  }
var singleResult = add(10)(20)(30);
 console.log(`Executing return function in one single `, singleResult);
 console.log(`Executing return function in one single typeof`, typeof singleResult);

  var callOne = add(10);
  console.log(`typeof callOne is `, typeof callOne);
  var callTwo = callOne(20);
  console.log(`typeof callTwo is `, typeof callTwo);
  var result  = callTwo(30);
  console.log(`typeof result is `, typeof result);





  function Welcome(name) {
    return `Welcome ${name}`;
  }

  function Executing(param) {
    const value = param();
    return value;
  }
  
  console.log(Welcome('md'));
  
  Executing(() => {});  // here we are passing arrow function as parameter to execute function
  Executing(Welcome);  // hear we are passing welcome function as parameter to execute function