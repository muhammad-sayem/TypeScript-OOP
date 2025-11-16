/*
  Abstraction can be used in 2 ways - 
    --> By using interface
    --> By using abstract class
*/

// <---------------- By using "interface" ---------------->  //

// Idea 
interface Vehicle {
  start(): void;
  accelarate(): void;
  stop(): void;
}

// Implementation
class Car implements Vehicle {
  start(){
    console.log("The car is starting.....");
  }
  accelarate(){
    console.log("The car is accelarating.....");
  }
  stop(){
    console.log("The car stopped.....");
  }
}

const car1 = new Car();
car1.start();
car1.accelarate();
car1.stop();

// <---------------- By using "abstract class" ---------------->  //

// Idea
abstract class Printer {
  abstract print(): void;
  abstract copy(): void;
  abstract scan(): void;
}

// Implementation 
class LaserPrinter extends Printer {
  print(){
    console.log("The document is printing....");
  }
  copy(){
    console.log("The document is copying....");
  }
  scan(){
    console.log("The document is scanning....");
  }
}

const laserPrinter1 = new LaserPrinter();
laserPrinter1.print();
laserPrinter1.copy();
laserPrinter1.scan();