// 数组类型结构赋值
{
  let a,b,rest;
  [a,b]=[1,2];
  console.log(a,b);
}

{
  let a,b,rest;
  [a,b,...rest]=[1,2,3,4,5,6];
  console.log(a,b,rest);
}

// 对象解构赋值
{
  let a,b;
  ({a,b}={a:1,b:2})
  console.log(a,b);
}

{
  let a,b,c,rest;
  [a,b,c=3]=[1,2];
  console.log(a,b,c);
}

// 数组解构赋值应用场景：变量替换
{
  let a=1;
  let b=2;
  [a,b]=[b,a];
  console.log(a,b);
}

// 数组解构赋值应用场景：返回值赋值，避免利用索引赋值
{
  function f(){
    return [1,2]
  }
  let a,b;
  [a,b]=f();
  console.log(a,b);
}

// 数组解构赋值应用场景：选择性赋值给变量
{
  function f(){
    return [1,2,3,4,5]
  }
  let a,b,c;
  [a,,,b]=f();
  console.log(a,b);
}

// 数组解构赋值应用场景：匹配赋值给变量，其余另处理
{
  function f(){
    return [1,2,3,4,5]
  }
  let a,b,c;
  [a,,...b]=f();
  console.log(a,b);
}

// 对象解构赋值：左右两侧均是对象，按照key/value进行赋值
{
  let o={p:42,q:true};
  let {q,p}=o;
  console.log(p,q);
}

// 对象解构赋值: 设置默认值
{
  let {a=10,b=5}={a:3};
  console.log(a,b);
}

// 对象解构赋值: 接口返回JSON对象，解构赋值(嵌套对象)
{
  let metaData={
    title:'abc',
    test:[{
      title:'test',
      desc:'description'
    }]
  }
  let {title:esTitle,test:[{title:cnTitle}]}=metaData;
  console.log(esTitle,cnTitle);
}


// 1、解构赋值是一种赋值
