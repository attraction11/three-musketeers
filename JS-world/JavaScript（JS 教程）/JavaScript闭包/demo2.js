function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();


// JavaScript中的函数会形成闭包。 闭包是由函数以及创建该函数的词法环境组合而成。
// 这个环境包含了这个闭包创建时所能访问的所有局部变量。在我们的例子中，
// myFunc 是执行 makeFunc 时创建的 displayName 函数实例的引用，
// 而 displayName 实例仍可访问其词法作用域中的变量，即可以访问到 name 。
// 由此，当 myFunc 被调用时，name 仍可被访问，其值 Mozilla 就被传递到alert中。
