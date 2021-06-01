var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }
};

var Counter1 = makeCounter();
var Counter2 = makeCounter();
console.log(Counter1.value()); /* logs 0 */
Counter1.increment();
Counter1.increment();
console.log(Counter1.value()); /* logs 2 */
Counter1.decrement();
console.log(Counter1.value()); /* logs 1 */
console.log(Counter2.value()); /* logs 0 */

// JavaScript 没有这种原生支持，但我们可以使用闭包来模拟私有方法。
// 私有方法不仅仅有利于限制对代码的访问：还提供了管理全局命名空间的强大能力，
// 避免非核心的方法弄乱了代码的公共接口部分

// 如果不是某些特定任务需要使用闭包，在其它函数中创建函数是不明智的，
// 因为闭包在处理速度和内存消耗方面对脚本性能具有负面影响。
