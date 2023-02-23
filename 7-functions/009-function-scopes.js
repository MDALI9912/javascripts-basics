//Global schope

const fullname = 'md shafayath ali';
// define a function
function printDetails() {
    //Function scope
    const city = "guntur";

    console.log({
        name: fullname,
        city: city
    })
}

// Invoking function
printDetails();
console.log(`Fullname = ${fullname}`);
console.log(`city = ${city}`);