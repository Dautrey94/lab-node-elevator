class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction  = "up";
    this.waitingList = [];
  }

  start() {
    this.handle = setInterval(() => this.update(), 1000);
    floorUp();
   }
  stop() { 
    clearInterval(this.handle);
  }
  update() {
    this.log();
    
   }
  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() {
    if (this.floor < this.MAXFLOOR) {
      this.floor++;
    }
  }
  floorDown() {
    if (this.floor > 0) {
      this.floor--;
    }
   }
  call(Person) {
    this.requests.push(Person);
    this.waitingList.push(Person);
   }
  log() {
    console.log("Direction: " + this.direction);
    console.log("Floor: " + this.floor);
  }
}

module.exports = Elevator;
