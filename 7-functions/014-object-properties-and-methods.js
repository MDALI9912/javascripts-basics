function reduceCarSpeed() {
    car.currentSpeed = car.currentSpeed - 10;
}

const car = {

    // properties
    name: 'BMW',
    year: 2022,
    isRunning: false,
    currentSpeed: 0,

    // methods ()

    startEngine: function() {
        car.isRunning = true;
    },

    stopEngine: () => {
        car.isRunning = false;

    },
    increaseSpeed: () => {
        car.currentSpeed = car.currentSpeed + 10;
    },

    decreasSpeed: reduceCarSpeed,

 printDetails: () => {
 console.log(`
 car Detail info
 Name: ${car.name}
 Year: ${car.year}
 Running: ${car.isRunning}
 Speed: ${car.currentSpeed}
`)        
}
}

console.log(`car Details`,car);
car.printDetails();

car.startEngine();
//this is .methode
//car.printDetails();
//for [] braket method
car['printDetails']();

car.increaseSpeed();
car.increaseSpeed();
car.printDetails();

car.decreasSpeed();
car.decreasSpeed();
// this is also .methode
//car.printDetails();
// for [] braket method
 car['printDetails']();
