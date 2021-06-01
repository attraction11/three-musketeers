// 在 JavaScript 中，可以在构造器函数中调用多个其它的构造器函数。这一点造成了多重继承的假象。
function Hobbyist (hobby) {
  this.hobby = hobby || "scuba";
}

function Engineer (name, projs, mach, hobby) {
  this.base1 = WorkerBee;
  this.base1(name, "engineering", projs);
  this.base2 = Hobbyist;
  this.base2(hobby);
  this.machine = mach || "";
}
Engineer.prototype = new WorkerBee;

var dennis = new Engineer("Doe, Dennis", ["collabra"], "hugo")

// 备注：某些面向对象语言支持多重继承。也就是说，对象可以从无关的多个父对象中继承属性和属性值。JavaScript 不支持多重继承。

// JavaScript 属性值的继承是在运行时通过检索对象的原型链来实现的。
// 因为对象只有一个原型与之关联，所以 JavaScript 无法动态地从多个原型链中继承。
