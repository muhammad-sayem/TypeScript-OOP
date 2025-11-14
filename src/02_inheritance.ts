class Person {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getSleepTime(numOfHours: number) {
    console.log(`${this.name} sleeps ${numOfHours} hours`);
  }
}

class Student extends Person{

}

class Teacher extends Person {
  designation: string;

  constructor(name: string, age: number, address: string, designation: string){
    super(name, age, address);  // This "super" is calling constructor of Person //

    this.designation = designation
  }

  ClassTakingTime(time: number) {
    console.log(`The class time of ${this.name} is: ${time}`);
  }
}

const student1 = new Student("Asif", 24, "Rampura");
student1.getSleepTime(9);

const teacher1 = new Teacher("Dr. Nadim Parvez", 60, "Dhaka", "Professor");
teacher1.ClassTakingTime(5);
