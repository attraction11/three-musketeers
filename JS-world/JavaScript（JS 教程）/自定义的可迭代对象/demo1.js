var myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

for (let value of myIterable) {
  console.log(value);
}
// 1
// 2
// 3

//or

console.log([...myIterable]); // [1, 2, 3]


// 一个定义了迭代行为的对象，比如在for...of中循环了哪些值。
// 一些内置类型，如Array或Map具有默认的迭代行为，而其他类型（如Object）没有。

// 为了实现可迭代，一个对象必须实现 @@iterator 方法，
// 这意味着这个对象（或其原型链中的一个对象）必须具有带 Symbol.iterator 键的属性：
