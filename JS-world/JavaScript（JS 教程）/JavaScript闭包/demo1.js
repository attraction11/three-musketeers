function addHandler() {
  var el = document.getElementById('el');
  console.log(this)
  el.onclick = function() {
    el.style.backgroundColor = 'red';
    console.log(this)
  }
}

addHandler()

// 闭包很有用，因为它允许将函数与其所操作的某些数据（环境）关联起来。
// 这显然类似于面向对象编程。在面向对象编程中，
// 对象允许我们将某些数据（对象的属性）与一个或者多个方法相关联。
