class Animal {
  name: string;
  species: string;
  sound: string;

  constructor(name: string, species: string, sound: string){
    this.name = name;
    this.species = species;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.name} is making sound: ${this.sound}`);
  }
}

// <-------------- parameter properties --------------> //

// class Animal {

//   constructor(public name: string, public species: string, public sound: string){
//     this.name = name;
//     this.species = species;
//     this.sound = sound;
//   }

//   makeSound() {
//     console.log(`${this.name} is making sound: ${this.sound}`);
//   }
// }

// <-------------- parameter properties --------------> //

const dog = new Animal("Tommy", "Canis lupus familiaris", "Bark");
console.log(dog);

const cat = new Animal("Billu", "Felis catus", "Meow Meow");
console.log(cat);

dog.makeSound();
cat.makeSound();