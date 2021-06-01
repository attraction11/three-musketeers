function Employee (name, dept) {
  this.name = name || "";
  this.dept = dept || "general";
}

function WorkerBee (projs) {
  this.projects = projs || [];
}
WorkerBee.prototype = new Employee;

// function Engineer (name, projs, mach) {
//   this.base = WorkerBee;
//   this.base(name, "engineering", projs);
//   this.machine = mach || "";
// }

// 上面的方法还可以有以下的写法：
function Engineer (name, projs, mach) {
  WorkerBee.call(this, name, "engineering", projs);
  this.machine = mach || "";
}

Engineer.prototype = new WorkerBee;
var jane = new Engineer("Doe, Jane", ["navigator", "javascript"], "belau");
Employee.prototype.specialty = "none";
