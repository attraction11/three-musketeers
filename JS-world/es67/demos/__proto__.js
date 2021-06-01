// __proto__ is a way to access [[Prototype]], it is not [[Prototype]] itself.

const log = require('../utils/log');

let animal = {
  east: false
};

let dog = Object.create(animal, {
  jump: {
    value: 100
  }
});

log(dog.east);
log(Object.getPrototypeOf(dog) === animal);


// fully identical shallow clone of obj
let clone = Object.create(animal, Object.getOwnPropertyDescriptors(animal));
log(clone);


// Object.create(null) creates an empty object without a prototype ([[Prototype]] is null): e.g. toString

let empty = Object.create(null);
log(empty);

let rabbit = {
  jump: true,
  __proto__: animal
}
log(Object.keys(rabbit));

for(let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);
  log(`${prop}: ${isOwn}`);
}


// instanceof
class Animal {}
class Rabbit extends Animal {}

let rb = new Rabbit();
log(rb instanceof Rabbit); // true
log(rb.__proto__ === Rabbit.prototype); // true
log(rb.__proto__.__proto__ === Animal.prototype); // true

// 1: Object.create(proto[, descriptors]) – creates an empty object with given proto as [[Prototype]] (can be null) and optional property descriptors.
// 2: Object.getPrototypeOf(obj) – returns the [[Prototype]] of obj (same as __proto__ getter).
// 3: Object.setPrototypeOf(obj, proto) – sets the [[Prototype]] of obj to proto (same as __proto__ setter).
// 4: Object.keys(obj) / Object.values(obj) / Object.entries(obj) – returns an array of enumerable own string property names/values/key-value pairs.
// 5: Object.getOwnPropertySymbols(obj) – returns an array of all own symbolic property names.
// 6: Object.getOwnPropertyNames(obj) – returns an array of all own string property names.
// 7: Reflect.ownKeys(obj) – returns an array of all own property names.
// 8: obj.hasOwnProperty(key): it returns true if obj has its own (not inherited) property named key.


// We also made it clear that __proto__ is a getter/setter for [[Prototype]] and resides in Object.prototype, just as other methods.
// 
// We can create an object without a prototype by Object.create(null). Such objects are used as “pure dictionaries”, they have no issues with "__proto__" as the key.
// 
// All methods that return object properties (like Object.keys and others) – return “own” properties. If we want inherited ones, then we can use for..in.