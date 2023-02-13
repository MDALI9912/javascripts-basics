/*

console.log("hello function...");
console.log( 58 * 96 );
console.log(true === false);



constbuser = {
    firstName: "shafayath",
    lastName : "ali",
    company: "sap",
    city: "guntur"
}

console.log();
*/
function createuserDetails(userfirstName, lastName, companyName, cityName) {
    const user = {
        firstName: userfirstName,
        lastName: lastName,
        companyName: companyName,
        cityName: cityName
    }
 return user;
}
const salary = 1000;
const hike = salary + 5000; // 15000


const newUser = createuserDetails('md', 'shafayath', 'sap', 'guntur'); // it will return an user object {value}
console.log(newUser);
