// ES6 对象扩展
{
  // 对象简洁表示法
  let o=1;
  let k=2;
  // 复杂版
  let es5={
    o:o,
    k:k
  };
  // ES6简洁版
  let es6={
    o,
    k
  };
  console.log(es5,es6);

  // 复杂版
  let es5_method={
    hello:function(){
      console.log('hello');
    }
  };
  // 简洁版
  let es6_method={
    hello(){
      console.log('hello');
    }
  };
  console.log(es5_method.hello(),es6_method.hello());
}

{
  // 属性表达式
  let a='b';
  let es5_obj={
    a:'c',
    b:'c'
  };

  let es6_obj={
    [a]:'c'
  }

  console.log(es5_obj,es6_obj); // {a: "c", b: "c"} {b: "c"}

}

{
  // 新增API， ES6对entries的支持比values好
  // Object.is相当于===
  console.log('字符串',Object.is('abc','abc'),'abc'==='abc'); // 字符串 true true
  console.log('数组',Object.is([],[]),[]===[]); // 数组 false false

  // 忽略enumerable为false的属性，只拷贝对象自身的可枚举的属性。浅拷贝
  console.log('拷贝',Object.assign({a:'a'},{b:'b'})); // 拷贝 {a: "a", b: "b"}

  let test={k:123,o:456};
  for(let [key,value] of Object.entries(test)){
    console.log([key,value]);
  }
}

{
  // 扩展运算符
  // let {a,b,...c}={a:'test',b:'kill',c:'ddd',d:'ccc'};
  // c={
  //   c:'ddd',
  //   d:'ccc'
  // }
}

/*
  目前，有四个操作会忽略enumerable为false的属性。

  for...in循环：只遍历对象自身的和继承的可枚举的属性。
  Object.keys()：返回对象自身的所有可枚举的属性的键名。
  JSON.stringify()：只串行化对象自身的可枚举的属性。
  Object.assign()： 忽略enumerable为false的属性，只拷贝对象自身的可枚举的属性。
* */

