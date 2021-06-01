// export let A=123;
//
// export function test(){
//   console.log('test');
// }
//
// export class Hello{
//   test(){
//     console.log('class');
//   }
// }

let A=123;
let test=function(){
  console.log('test');
}
class Hello{
  test(){
    console.log('class');
  }
}

// 不给带出模块起名字，由引入文件决定名称
// 建议此种方式，方式误操作参数导出
export default {
  A,
  test,
  Hello
}
