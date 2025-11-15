/* Normally jodi "Counter" theke alada instance create kore increase or decrease
kora hoy tahole sobar jonno alada memory / refference theke kaaj hoy.
But ami jodi chai je instance joto e hok, increment hobe ekta jayga theke 
tokhon "static" use korte hoy */

class Counter {
  static count: number = 0;

  increment() {
    return (Counter.count = Counter.count + 1);
  }

  decrement() {
    return (Counter.count = Counter.count - 1);
  }
}

const instance1 = new Counter();
console.log(instance1.increment()); // 1
console.log(instance1.increment()); // 1 --> 2
console.log(instance1.increment()); // 2 --> 3

const instance2 = new Counter();
console.log(instance2.increment()); // 3 --> 4
console.log(instance2.increment()); // 4 --> 5

const instance3 = new Counter();
console.log(instance3.decrement()); // 5 --> 4
console.log(instance3.decrement()); // 4 --> 3
console.log(instance3.increment()); // 3 --> 4

// ------------------------------- //

console.log("After sing static methods also");

// If we want to make the methods "static" also (we don't need to make instance, we can access them directly) //
class Counter2 {
  static count: number = 10;

  static increment() {
    return (Counter2.count = Counter2.count + 1);
  }

  static decrement() {
    return (Counter2.count = Counter2.count - 1);
  }
}

console.log(Counter2.increment());
console.log(Counter2.increment());
console.log(Counter2.decrement());
console.log(Counter2.increment());