const Elevator = require('./elevator.js');

let elevator = new Elevator;

//elevator.start();

// for(let i = 0; i < 20; i++){
//     elevator.floorUp();
//     console.log(elevator.floor);
// }

for (let i = 10; i > 0; i--){
    elevator.floorDown();
    console.log(elevator.floor);
}