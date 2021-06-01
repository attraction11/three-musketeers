// Generator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同，但仍然是普通函数
// Generator 函数是一个状态机，返回的是一个遍历器对象
// Generator 函数有两个特征：1、function关键字与函数名之前有星号 2、函数体内部使用yield表达式，定义不同的内部状态
// Generator 函数是分段执行的，yield表达式是暂停执行的标记，而next方法可以恢复执行


// 1、Generator函数基本定义
{
  let tell = function * () {
    yield 'a'
    yield 'b'
    return 'c'
  }

  let k = tell()

  console.log(k.next())
  console.log(k.next())
  console.log(k.next())
  console.log(k.next())
}


// 2、Generator函数返回的是遍历器对象，赋值给对象的Symbol.iterator，
// 可以使对象具有Iterator接口,而具有Iterator接口的对象可以被...运算符或for-of遍历
{
  let obj = {}
  obj[Symbol.iterator] = function * () {
    yield 1
    yield 2
    yield 3
  }

  for (let value of obj) {
    console.log('value', value)
  }
}


// 3、Generator函数实现状态机
{
  let state = function * () {
    while (1) {
      yield 'A'
      yield 'B'
      yield 'C'
    }
  }
  let status = state()
  console.log(status.next())
  console.log(status.next())
  console.log(status.next())
  console.log(status.next())
  console.log(status.next())
}


// 4、async函数定义及优势
{
  // async 函数是什么？一句话，它就是 Generator 函数的语法糖，功能和用法相同
  // async函数就是将 Generator 函数的星号（*）替换成async，将yield替换成await
  // 优点 1、内置执行器 2、更好的语义 3、更广的适用性 4、返回值是 Promise
  let state = async function () {
    while (1) {
      await 'A'
      await 'B'
      await 'C'
    }
  }
  let status = state()
  console.log(status.next())
  console.log(status.next())
  console.log(status.next())
  console.log(status.next())
  console.log(status.next())
}


// 5、async函数实例
{
  async function timeout (ms) {
    await new Promise((resolve) => {
      setTimeout(resolve, ms)
    })
  }

  async function asyncPrint (value, ms) {
    await timeout(ms)
    console.log(value)
  }

  asyncPrint('hello world', 50)
}


// 6、async函数的多种定义方式
{
  // 函数声明
  async function foo () {
  }

  // 箭头函数
  const foo = async () => {
  }

  // 对象的方法
  let obj = {
    async foo () {
    }
  }
  obj.foo().then()
}


// 7、class类中async函数的定义
{
  class Storage {
    constructor () {
      this.cachePromise = caches.open('avatars')
    }

    async getAvatar (name) {
      const cache = await this.cachePromise
      return cache.match(`/avatars/${name}.jpg`)
    }
  }

  const storage = new Storage()
  storage.getAvatar('jake').then()
}


// 8、点击抽奖按钮Generator函数的应用场景
{
  // 尽量少用变量存储关键变量
  let draw = function (count) {
    // 具体抽奖逻辑
    console.info(`剩余${count}次`)
  }

  let residue = function * (count) {
    while (count > 0) {
      count--
      yield draw(count)
    }
  }

  let star = residue(5)
  let btn = document.createElement('button')
  btn.id = 'start'
  btn.textContent = '抽奖'
  document.body.appendChild(btn)
  document.getElementById('start').addEventListener('click', function () {
    star.next()
  }, false)
}


// 9、长轮询Generator函数的应用场景
{
  let ajax = function * () {
    yield new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve({code: 0})
      }, 200)
    })
  }

  let pull = function () {
    let genertaor = ajax()
    let step = genertaor.next()
    step.value.then(function (d) {
      if (d.code != 0) {
        setTimeout(function () {
          console.info('wait')
          pull()
        }, 1000)
      } else {
        console.info(d)
      }
    })
  }

  pull()
}

/**********************************分割线*******************************************/
// 对比yield和return的相似与区别
// 1、两者都具有返回表达式结果的能力
// 2、yield具有记忆功能，而return没有
// 3、yield可以返回一系列的值，而return只能返回一个值
// 4、yield后的语句是暂缓执行，只有遍历器对象执行next()才会执行。而return语句在函数赋值后立即执行。
