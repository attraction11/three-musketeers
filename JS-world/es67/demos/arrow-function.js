// Arrow functions VS bind

// There’s a subtle difference between an arrow function => and a regular function called with .bind(this):
//
// .bind(this) creates a “bound version” of the function.
// The arrow => doesn’t create any binding. The function simply doesn’t have this.
// The lookup of this is made exactly the same way as a regular variable search: in the outer lexical environment.


// no 'this'
let bikes = {
  title: 'share bikes',
  brands: ['mobike', 'ofo', 'bluebike', 'ubike'],
  showLists() {
    setTimeout(() => {
      console.log(`${this.title}`);
      this.brands.forEach((brand) => {
        console.log(brand);
      })
    }, 1000);
  }
};

bikes.showLists();

// no 'arguments'
function defer(fn, time) {
  return function() {
    setTimeout(() => fn.apply(this, arguments), time);
  }
}

function sayHi(who) {
  console.log(`Hello ${who}`);
}

let deferSayHi = defer(sayHi, 2000);
deferSayHi('hejx');


// Arrow functions:
//
// 1: Do not have this.
// 2: Do not have arguments.
// 3: Can’t be called with new.
// 4: They also don’t have super.


// That’s because they are meant for short pieces of code that does not have their own “context”,
// but rather works in the current one. And they really shine in that use case.
