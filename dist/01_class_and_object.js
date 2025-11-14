"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    species;
    sound;
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
}
const dog = new Animal("Tommy", "Canis lupus familiaris", "Bark");
console.log(dog);
//# sourceMappingURL=01_class_and_object.js.map