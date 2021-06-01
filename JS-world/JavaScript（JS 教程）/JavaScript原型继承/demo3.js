function Employee () {
  this.dept = "general";
}
// 如果希望对象的属性具有默认值，并且希望在运行时修改这些默认值，
// 应该在对象的原型中设置这些属性，而不是在构造器函数中
Employee.prototype.name = "";

function WorkerBee () {
  this.projects = [];
}
WorkerBee.prototype = new Employee;

var amy = new WorkerBee;

Employee.prototype.name = "Unknown";

// 备注：在创建 Employee 对象的任意实例时，该实例的 name 属性将获得一个本地值（空的字符串）。
// 这就意味着在创建一个新的 Employee 对象作为 WorkerBee 的原型时，
// WorkerBee.prototype 的 name 属性将具有一个本地值。因此，
// 当 JavaScript 查找 amy 对象（WorkerBee 的实例）的 name 属性时，
// JavaScript 将找到 WorkerBee.prototype 中的本地值。
// 因此，也就不会继续在原型链中向上找到 Employee.prototype 了。
