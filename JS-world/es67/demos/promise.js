// 1: Promise.resolve(value) – makes a resolved promise with the given value,
// 2: Promise.reject(error) – makes a rejected promise with the given error,
// 3: Promise.all(promises) – waits for all promises to resolve and returns an array of their results.
// If any of the given promises rejects, then it becomes the error of Promise.all, and all other results are ignored.
// 4: Promise.race(promises) – waits for the first promise to settle, and its result/error becomes the outcome.


// all
Promise.all([
  new Promise((resolve, reject) => {setTimeout(() => {resolve(1)}, 1000)}),
  new Promise((resolve, reject) => {setTimeout(() => {resolve(2)}, 2000)}),
  new Promise((resolve, reject) => {setTimeout(() => {resolve(3)}, 1000)})
]).then((result) => {
  console.log(result);
})

// race
Promise.race([
  new Promise((resolve, reject) => {setTimeout(() => {resolve(1)}, 2000)}),
  new Promise((resolve, reject) => {setTimeout(() => {resolve(2)}, 1000)}),
  new Promise((resolve, reject) => {setTimeout(() => {resolve(3)}, 500)})
]).then((result) => {
  // log 3
  console.log(result);
})
