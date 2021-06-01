let handler = {
  get: function(target, name){
    return name in target ? target[name] : 42;
  }};

let p = new Proxy({}, handler);
p.a = 1;

console.log(p.a, p.b); // 1, 42

// Proxy对象定义了一个目标（这里是一个空对象）和一个实现了get陷阱的 handle 对象。
// 这里，代理的对象在获取未定义的属性时不会返回undefined，而是返回 42。
