   // Ticket Bookings
                                                    // in package.json if we enter -> "type": "module" then we can use ->  import readline from 'readline-sync';   this are the statements
   import readline from 'readline-sync'; // -> for error cannot use inport statement outside a modules we have to use ->  const readline = require('readline-sync') this are the statements 

 // const readline = require('readline-sync');

   const CURRENT_AVAILABLE_TICKETS = 10;
   console.log(`current avilable tickets are =${CURRENT_AVAILABLE_TICKETS}`)

   const numberTicketsRequired = 15;

   const canBuyTickets = numberTicketsRequired <= CURRENT_AVAILABLE_TICKETS;

// 1. canBuyTickets -> true -> you 're tickets are confirment
// 2. canBuyTickets -> false -> tickets are not avilable

let message = '';

if( canBuyTickets ) {
    message = `you 're tickets are confirmend`
} else {
    message = `tickets are not avilable`
}


  console.log(message)