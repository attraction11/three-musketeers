// Mixin – is a generic object-oriented programming term: a class that contains methods for other classes.
//
// Some other languages like e.g. python allow to create mixins using multiple inheritance.
// JavaScript does not support multiple inheritance, but mixins can be implemented by copying them into the prototype.
//
// We can use mixins as a way to augment a class by multiple behaviors, like event-handling as we have seen above.
//
// Mixins may become a point of conflict if they occasionally overwrite native class methods.
// So generally one should think well about the naming for a mixin, to minimize such possibility.
//


let sayMixin = {
  say(msg) {
    console.log(msg);
  }
};

let sayHiMixin = {
  __proto__: sayMixin,

  sayHi(name) {
    super.say(`Hi ${name}`);
  },

  sayBye(name) {
    super.say(`GoodBye ${name}`);
  }
};

class User {};

Object.assign(User.prototype, sayHiMixin);

let hejx = new User();
hejx.sayHi('li');

// hejx.say('hello word'); not work, because `super` actually means `sayHiMixin.__proto__`,
// not `User.__proto__`.
