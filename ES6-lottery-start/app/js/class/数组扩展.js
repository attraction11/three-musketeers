// 数组扩展
{
  // Array.of方法用于将一组值，转换为数组
  let arr = Array.of(3,4,7,9,11);
  console.log('arr=',arr); //arr= (5) [3, 4, 7, 9, 11]

  let empty=Array.of();
  console.log('empty',empty); //empty []
}

{
  // Array.from方法用于将两类对象转为真正的数组
  let p=document.querySelectorAll('p');
  let pArr=Array.from(p);
  pArr.forEach(function(item){
    console.log(item.textContent);
  });
  // Array.from方法可以用作map
  console.log(Array.from([1,3,5],function(item){return item*2}));
}

{
  console.log('fill-7',[1,'a',undefined].fill(7)); // [7, 7, 7]
  console.log('fill,pos',['a','b','c'].fill(7,1,3)); // ["a", 7, 7]
}

// 唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历
{
  for(let index of ['1','c','ks'].keys()){
    console.log('keys',index);
  }
  for(let value of ['1','c','ks'].values()){
    console.log('values',value);
  }
  for(let [index,value] of ['1','c','ks'].entries()){
    console.log('values',index,value);
  }
}

{
  // 在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组
  console.log([1,2,3,4,5].copyWithin(0,3,4)); // [4, 2, 3, 4, 5]
}

{
  console.log([1,2,3,4,5,6].find(function(item){return item>3})); // 4
  // find方法的回调函数可以接受三个参数，依次为当前的值、当前的位置和原数组。
  [1, 5, 10, 15].find(function(value, index, arr) {
    return value > 9;
  }) // 10
  console.log([1,2,3,4,5,6].findIndex(function(item){return item>3})); // 3
  [1, 5, 10, 15].findIndex(function(value, index, arr) {
    return value > 9;
  }) // 2
}

{
  // Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似
  console.log('number',[1,2,NaN].includes(1)); // number true
  console.log('number',[1,2,NaN].includes(NaN)); // number true
}
