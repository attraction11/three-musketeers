function instanceOf(object, constructor) {
  while (object != null) {
    if (object == constructor.prototype)
      return true;
    // 检查对象的类型是否为 "xml" 的目的在于解决新近版本的 JavaScript 中表达 XML 对象的特异之处
    if (typeof object == 'xml') {
      return constructor.prototype == XML.prototype;
    }
    object = object.__proto__;
  }
  return false;
}

function Employee () {
  this.name = "";
  this.dept = "general";
}

var f = new Employee();
var isTrue = instanceOf(f, Employee)
console.log(isTrue)

var chris = new Engineer("Pigman, Chris", ["jsd"], "fiji");

// 备注：每个对象都有一个 __proto__ 对象属性（除了 Object）；
// 每个函数都有一个 prototype 对象属性。因此，通过“原型继承”，
// 对象与其它对象之间形成关系。通过比较对象的 __proto__ 属性和函数的
// prototype 属性可以检测对象的继承关系。JavaScript 提供了便捷方法：
// instanceof 操作符可以用来将一个对象和一个函数做检测，
// 如果对象继承自函数的原型，则该操作符返回真。
