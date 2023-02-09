const readline = require("readline-sync");

//    "Name"         :      "md ali",
  /*  "city"         :      "guntur",
    "Designation"  :      "developer",
    "Github Profile":     "https://github.com/MDALI9912/Markdown-basics",
    "website"      :      "https://MDALI9912/",
    "married"      :       false,
    "Brothers"     :       1,
    "sisters"      :       1
*/  //-->  multi line comment we use * symble  like up 

console.log("*** Resume Maker ***");


const name = readline.question('Name:');
const label = readline.question('Designation:');
const email = readline.question('Email:');
const url = readline.question('Webiste:');
const  phone = readline.question('Phone:');

const resume = {
    basics: {
        name: name,
        label: label,
        email: email,
        url: url,
        phone: phone
    }
};

console.log("User Details")
console.log(resume)