// ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值
// 它是 JavaScript 语言的第七种数据类型，前六种是：undefined、null、
// 布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。
{
  // Symbol声明方法一
  let a1=Symbol();
  let a2=Symbol();
  typeof a1 // "symbol"
  console.log(a1===a2); // false
  // Symbol声明方法二
  let a3=Symbol.for('a3');
  let a4=Symbol.for('a3');
  console.log(a3===a4); // true
}

{
  let a1=Symbol.for('abc');
  let obj={
    [a1]:'123',
    'abc':345,
    'c':456
  };
  console.log('obj',obj); // {abc: 345, c: 456, Symbol(abc): "123"}

  // for of 取不到Symbol类型的属性
  for(let [key,value] of Object.entries(obj)){
    console.log('let of',key,value); // let of abc 345  let of c 456
  }

  // getOwnPropertySymbols 仅能取到Symbol类型的属性
  Object.getOwnPropertySymbols(obj).forEach(function(item){
    console.log(obj[item]); // 123
  })

  // Reflect是ES6对象，返回包含Symbol类型的属性和非Symbol类型的属性的key/value
  Reflect.ownKeys(obj).forEach(function(item){
    console.log('ownkeys',item,obj[item]);
    // ownkeys abc 345
    // ownkeys c 456
    // ownkeys Symbol(abc) 123
  })
}
