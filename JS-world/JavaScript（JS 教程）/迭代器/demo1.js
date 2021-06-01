function makeIterator(array){
  var nextIndex = 0;
  return {
    next: function(){
      return nextIndex < array.length ?
        {value: array[nextIndex++], done: false} :
        {done: true};
    }
  };
}

var it = makeIterator(['yo', 'ya']);
console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done);  // true

// 备注：一个迭代器对象 ，知道如何每次访问集合中的一项， 并跟踪该序列中的当前位置。
// 在  JavaScript 中 迭代器是一个对象，它提供了一个next() 方法，用来返回序列中的下一项。
// 这个方法返回包含两个属性：done和 value。 迭代器对象一旦被创建，就可以反复调用next()。
