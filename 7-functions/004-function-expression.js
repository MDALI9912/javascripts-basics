// expresssion produce a value   imp
// statement don't produce a value  imp

//expression
56 + 90; // here 56 and 90 are two values which will converted into a single value
89 + 100 > 78 + 99;

// so expression will generate a value, which can be assign to variable 
let output = 89 +100 > 78 + 99; // this is retreated has a statement

console.log("hey ! how are you");

// function declaration
function dowelcome(username){
    console.log(`welcome ${ username}`);
}
dowelcome('md ali');

let add = function(xValue, yValue){
    return xValue + yValue;
}

let additionOfNumber = add(78, 67);
console.log(additionOfNumber);
