// 1、函数扩展，参数默认值设置
{
  function test(x, y = 'world'){
    console.log('默认值',x,y);
  }
  test('hello'); // 默认值 hello world
  test('hello','kill'); // 默认值 hello kill
}

// 2、函数扩展，参数默认值设置
{
  let x='test';
  function test2(x,y=x){
    console.log('作用域',x,y);
  }
  test2('kill'); // 作用域 kill kill
  test2(); // 作用域 undefined undefined
}

// 3、函数扩展，参数使用扩展运算符
{
  // ES6 rest参数，注意...arg参数后不能有参数
  function test3(...arg){
    for(let v of arg){
      console.log('rest',v);
    }
  }
  test3(1,2,3,4,'a');
  // rest 1
  // rest 2
  // rest 3
  // rest 4
  // rest a

}

// 4、ES6 扩展运算符，rest参数的逆运算
{
  console.log(...[1,2,4]); // 1 2 4
  console.log('a',...[1,2,4]); // a 1 2 4
}

// 5、ES6 箭头函数
{
  let arrow = v => v*2;
  let arrow2 = () => 5; // 当箭头函数没有参数的时候用()表示
  console.log('arrow',arrow(3)); // arrow 6
  console.log(arrow2()); // 5

}

// 6、尾调用
{
  // 尾调用（函数的最后一个语句是否是函数？是，则为尾调用）
  // 提升性能，主要用在函数式编程
  function tail(x){
    console.log('tail',x);
  }
  function fx(x){
    return tail(x)
  }
  fx(123)
}
