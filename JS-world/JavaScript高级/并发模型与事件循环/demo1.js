// 1、函数调用形成了一个栈帧

function foo(b) {
  var a = 10;
  return a + b + 11;
}

function bar(x) {
  var y = 3;
  return foo(x * y);
}

console.log(bar(7)); // 返回 42

// 2、堆：对象被分配在一个堆中，即用以表示一大块非结构化的内存区域。

// 3、一个 JavaScript 运行时包含了一个待处理的消息队列。
// 每一个消息都关联着一个用以处理这个消息的函数


// 函数 setTimeout 接受两个参数：待加入队列的消息和一个延迟（可选，默认为 0）。
// 这个延迟代表了消息被实际加入到队列的最小延迟时间。如果队列中没有其它消息，
// 在这段延迟时间过去之后，消息会被马上处理。但是，如果有其它消息，
// setTimeout 消息必须等待其它消息处理完。因此第二个参数仅仅表示最少延迟时间，
// 而非确切的等待时间。
const s = new Date().getSeconds();

setTimeout(function() {
  // 输出 "2"，表示回调函数并没有在 500 毫秒之后立即执行
  console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
}, 500);

while(true) {
  if(new Date().getSeconds() - s >= 4) {
    console.log("Good, looped for 4 seconds");
    break;
  }
}
