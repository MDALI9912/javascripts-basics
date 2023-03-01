//normal flow
/*
Hear is normal if/else flow
if( condition ) {
   ??????
}else{
    ????
}
*/

//  Terinart operter 

import readline from 'readline-sync';
const ticketsAvilable = 20;

let message = '';

const userInput = readline.question('No of required tickets ?');

/*
if (userInput <= ticketsAvilable) {
    message = 'Tickets Booked'
}else {
    message = 'Tickets not booked'
}
*/   // short cut  =>

// condition ? trueBlock : falseBlock

message = userInput <= ticketsAvilable ? 'Tickets are booked' : 'Tickets are not Booked';

  // another type
  const condition = userInput <= ticketsAvilable;
  const trueMessage = 'Tickets are booked';
  const falseMassage = 'Tickets are not Booked';

  const anotherMessage = condition ? trueMessage : falseMassage ;

console.log(`message value = ${message}`);
console.log(`Another value = ${anotherMessage}`)


