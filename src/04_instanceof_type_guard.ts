class Person {
  name: string;

  constructor(name: string){
    this.name = name
  }

  getSleepTime(numOfHours: number) {
    console.log(`${this.name} sleeps ${numOfHours} hours daily!!`);
  }
}

class Studnet extends Person {
  constructor(name: string){
    super(name)
  }

  doStudy(numOfHours: number){
    console.log(`${this.name} studies ${numOfHours} hours daily!!`);
  }
}

class Teacher extends Person {
  constructor(name: string){
    super(name);
  }

  classTakingTime(numOfHours: number) {
    console.log(`${this.name} takes ${numOfHours} hours class daily!!`);
  }
}

const getUserInfo = (user: Person) => { // Person class "type" hishabe use hocche, যে কোন Person বা Person থেকে extend হওয়া object আমি নিতে পারি 
  if(user instanceof Studnet){
    user.doStudy(6);
  }
  else if(user instanceof Teacher){
    user.classTakingTime(4);
  }
  else{
    user.getSleepTime(8)
  }
}

const student1 = new Studnet("Mr. Student");
const teacher1 = new Teacher("Mr. Teacher");

getUserInfo(student1);
getUserInfo(teacher1);

// ----------------------------------------------------------- //

// ###################### Function guard ###################### //

// const isStudent = (user: Person) => {
//   return user instanceof Student; // user is Student
// };

// const isTeacher = (user: Person) => {
//   return user instanceof Teacher; // user is Teacher
// };

// const getUserInfo = (user: Person) => {
//   if (isStudent(user)) {
//     user.doStudy(10);
//   } else if (isTeacher(user)) {
//     user.takeClass(5);
//   } else {
//     user.getSleep(15);
//   }
// };

// ###################### Function guard ###################### //