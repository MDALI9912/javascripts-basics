// creating simple javascript object

const user = {
    firstname: 'md',
    lastname: 'shafayath',
    work: 'UI dev',
    city: 'guntur',
    wfh: true,
    skills: ['html', 'css', 'jd'],
    company: {
        name: 'sap',
        location: 'Bangalore'
    },

    details: function() {
        console.log(`user details: md shafayath`);
    }
}


console.log(user);
console.log(`Data type of variable user is ${typeof user}` );



// How to access object properties (Key)
// 1. DOT Notation  '.'
// 2. Brakets Notation '[]'

//DOT Notation '.' object.propertyName

console.log(`user city info: ${user.city}`);

// 2 way Brakets Notation '[]' -> object['propertyName']

console.log(`user city info via brakets notation user['city] = ${user['city']}`);

//Accessing nested object properties -> '.' or '[]'
const companyLocation = user.company.location;
console.log(`companyLocation by dot notation = ${companyLocation}`);

const companyLog = user['company']['location'];
console.log(`company Location by bracket notation = ${companyLog}`);


// This is array form
const skills = user.skills;
console.log(skills);


user.details()