function greetUser(username = 'UNKNOWN') {
    console.log(`Welcome ${username}!`);

}

greetUser();
greetUser(`md shafayath ali`);

const welcomeUser = (username = 'UnKnown User') => {
    return `welcome to my page! ${username}`
}

const welcomemd = welcomeUser('md ali');
console.log(welcomemd);