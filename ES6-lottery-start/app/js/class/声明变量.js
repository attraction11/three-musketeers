function test(){
  // for(let i=1;i<3;i++){
  //   console.log(i);
  // }
  // console.log(i);
  let a = 1;
  // let a = 2;
}

function last(){
  const PI=3.1415926;
  const k={
    a:1
  }
  k.b=3;
  console.log(PI,k);
}


// test();
last();


// 1、ES6默认采用严格模式的，因此变量未声明使用，会报引用错误
// 2、let不支持重复声明变量
// 3、const声明的常量不支持修改，并且必须进行赋值
// 4、const声明的引用类型的值，支持修改引用类型的属性。因为const声明的是对象的指针，
// 不会发生变化。但是指针指向的内存的值可以修改
