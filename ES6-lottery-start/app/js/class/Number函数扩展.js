{
  // 二进制
  console.log('B', 0B111110111)
  console.log(0o767)
}

{
  // ES6 Number.isFinite 判断是否有尽？
  // ES6 Number.isNaN 判断是否不是数字？
  console.log('15', Number.isFinite(15)) // true
  console.log('NaN', Number.isFinite(NaN)) // false
  console.log('1/0', Number.isFinite('true' / 0)) // false
  console.log('NaN', Number.isNaN(NaN)) // true
  console.log('0', Number.isNaN(0)) // false
}

{
  // ES6 Number.isInteger 判断是否为整数？
  console.log('25', Number.isInteger(25)) // true
  console.log('25.0', Number.isInteger(25.0)) // true
  console.log('25.1', Number.isInteger(25.1)) // false
  console.log('25', Number.isInteger('25')) // false
}

{
  // ES6 Number.isSafeInteger 判断是否为安全数字？
  console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER)
  console.log('10', Number.isSafeInteger(10)) // true
  console.log('a', Number.isSafeInteger('a')) // false
}

{
  // ES6 Math.trunc 向下取余
  console.log(4.1, Math.trunc(4.1))
  console.log(4.9, Math.trunc(4.9))
}

{
  // ES6 Number.sign 判断数字为正负数与0？
  console.log('-5', Math.sign(-5)) // -1
  console.log('0', Math.sign(0)) // 0
  console.log('5', Math.sign(5)) // 1
  console.log('50', Math.sign('50')) // 1
  console.log('foo', Math.sign('foo')) // NaN
}

{
  // ES6 Number.cbrt 计算立方根
  console.log('-1', Math.cbrt(-1)) // -1
  console.log('8', Math.cbrt(8)) // 2
}
