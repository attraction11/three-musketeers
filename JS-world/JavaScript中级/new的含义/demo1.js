// 当你执行：
// var o = new Foo();

// JavaScript 实际上执行的是：
var o = new Object();
o.__proto__ = Foo.prototype;
Foo.call(o);

o.someProp;

// 它检查o是否具有someProp属性。如果没有，它会查找 Object.getPrototypeOf(o).someProp，
// 如果仍旧没有，它会继续查找 Object.getPrototypeOf(Object.getPrototypeOf(o)).someProp。


function person(name) {
  this.name = name;
}
// 通过new创建了一个对象 //new是一种语法糖，new person等价于
// var bar = (function(name) { var _newObj = { constructor : person, __proto__ : person.prototype, };
var foo = new person("deen");
_newObj.constructor(name); // _newObj.constructor.call(_newObj, name) return _newObj; })();


// 创建一个空对象 obj;
// 将新创建的空对象的隐式原型指向其构造函数的显示原型。
// 使用 call 改变 this 的指向
// 如果无返回值或者返回一个非对象值，则将 obj 返回作为新对象；如果返回值是一个新对象的话那么直接直接返回该对象。
//
// 所以我们可以看到，在 new 的过程中，我们是使用 call 改变了 this 的指向。

var a = new myFunction("Li","Cherry");

new myFunction{
  var obj = {};
  obj.__proto__ = myFunction.prototype;
  var result = myFunction.call(obj,"Li","Cherry");
  // return typeof result === 'obj'? result : obj;
}
