// 一个好的经验法则是总是返回或终止 Promise 链，
// 并且一旦你得到一个新的 Promise，返回它
// doSomething()
//   .then(function(result) {
//     return doSomethingElse(result);
//   })
//   .then(newResult => doThirdThing(newResult))
//   .then(() => doFourthThing());
// .catch(error => console.log(error));
