class Person {
  getSleep(){
    console.log(`I am a normal person and I sleep for 8 hours`);
  }
}

class Student extends Person{
  getSleep(){
    console.log(`I am a student and I sleep for 7 hours`);
  }
}

class Developer extends Person{
  getSleep(){
    console.log(`I am a developer and I sleep for 6 hours`);
  }
}

const getSleepingHours = (param: Person) => {
  param.getSleep()
}

const person1 = new Person();
const person2 = new Student();
const person3 = new Developer();

getSleepingHours(person1); 
getSleepingHours(person2);    
getSleepingHours(person3);

// ------------------------------- //

class Shape {
  getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  // Area of circle = pi*radius*radius //

  radius: number;
  constructor(radius: number){
    super()
    this.radius = radius;
  }

  getArea(): number {
    return Number((Math.PI*this.radius*this.radius).toFixed(2));
  }
}

class Rectangle extends Shape {
  // Area of rectangle = height*width //

  height: number;
  width: number;

  constructor(height: number, width: number){
    super();
    this.height = height;
    this.width = width;
  }

  getArea(): number {
    return this.height*this.width;
  }
}

const getAreaOfShapes = (param: Shape) => {
  console.log(param.getArea());
}

const shape1 = new Shape();
const shape2 = new Circle(5);
const shape3 = new Rectangle(6, 5);

getAreaOfShapes(shape1);
getAreaOfShapes(shape2);
getAreaOfShapes(shape3);