// 1. Outputting a class
// 
// If we output it like alert(User), some engines show "class User...", while others show "function User...".
// Please don’t be confused: the string representation may vary, but that’s still a function, 
// there is no separate “class” entity in JavaScript language.
// 
// 2. Class methods are non-enumerable
// 
// Class definition sets enumerable flag to false for all methods in the "prototype". 
// That’s good, because if we for..in over an object, we usually don’t want its class methods.
// 
// 3. What if there’s no constructor?
// 
// If there’s no constructor in the class construct, then an empty function is generated, same as if we had written constructor() {}.
// 
// 4. Classes always use strict
// 
// All code inside the class construct is automatically in strict mode.


class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed += speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stopped`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  
  hide() {
    console.log(`${this.name} hides!`);
  }
  
  stop() {
    super.stop();
    this.hide();
  }
}

var dog = new Dog('hejx');

dog.run(100);
dog.stop();