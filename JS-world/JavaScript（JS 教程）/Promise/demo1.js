// 在一个失败操作（即一个 catch）之后可以继续使用链式操作，
// 即使链式中的一个动作失败之后还能有助于新的动作继续完成
new Promise((resolve, reject) => {
  console.log('Initial');

  resolve();
})
  .then(() => {
    throw new Error('Something failed');

    console.log('Do this');
  })
  .catch(() => {
    console.log('Do that');
  })
  .then(() => {
    console.log('Do this whatever happened before');
  });
