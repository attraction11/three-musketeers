// ECMAScript 5 中引入了一个新方法：Object.create()。
// 可以调用这个方法来创建一个新对象。新对象的原型就是调用 create 方法时传入的第一个参数

var a = {a: 1};
// a ---> Object.prototype ---> null

var b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (继承而来)

var c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

var d = Object.create(null);
// d ---> null
console.log(d.hasOwnProperty); // undefined, 因为d没有继承Object.prototype
