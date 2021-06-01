// 1、iterator是将不同的数据结构通过统一的方式进行获取
{
  let arr = ['hello', 'world']
  let map = arr[Symbol.iterator]()
  console.log(map.next())
  console.log(map.next())
  console.log(map.next())
}

// 2、对象默认没有iterator，为对象添加[Symbol.iterator]属性
{
  let obj = {
    start: [1, 3, 2],
    end: [7, 9, 8],
    [Symbol.iterator] () {
      let self = this
      let index = 0
      let arr = self.start.concat(self.end)
      let len = arr.length
      return {
        next () {
          if (index < len) {
            return {
              value: arr[index++],
              done: false
            }
          } else {
            return {
              value: arr[index++],
              done: true
            }
          }
        }
      }
    }
  }
  for (let key of obj) {
    console.log(key)
  }
}

// 2、数组默认有iterator接口
{
  let arr = ['hello', 'world']
  for (let value of arr) {
    console.log('value', value)
  }
}

/** *************************分割线******************************/
// iterator的作用
// 1、为不同的数据提供一种统一、简便的访问接口
// 2、使得数据结构的成员可以按照某种次序排序
// 3、ES6创造了一种新的遍历命令for-of循环，iterator接口主要供for-of使用
// 原生具备iterator接口的数据结构：
// 1、Array、Map、Set、String、TypedArray、函数的 arguments 对象、NodeList 对象
// for...of循环相比forEach for...in做法，有一些显著的优点：
// 1、有着同for...in一样的简洁语法，但是没有for...in那些缺点。
// 2、不同于forEach方法，它可以与break、continue和return配合使用。
// 3、提供了遍历所有数据结构的统一操作接口。
