import readline from 'readline-sync';
import chalk from 'chalk';

const AVAILABLE_TICKETS = 10;
const userRequiredTickets = readline.question('how many tickets are required ? ');

if(userRequiredTickets <= AVAILABLE_TICKETS) {
    console.log( chalk.bgBlue('Tickets are confirmend') )
} else{
    console.log( chalk.bgRed('Tickets are not avilable...') )
}