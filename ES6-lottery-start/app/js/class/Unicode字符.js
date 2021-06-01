{
  console.log('a',`\u0061`);
  console.log('s',`\u20BB7`);
  // 当大于两个字符，用{}包裹起来可以识别
  console.log('s',`\u{20BB7}`);
  let s='𠮷';

}


{
  let s='𠮷';
  console.log('length',s.length);
  console.log('0',s.charAt(0));
  console.log('1',s.charAt(1));
  console.log('at0',s.charCodeAt(0));
  console.log('at1',s.charCodeAt(1));

  let s1='𠮷a';
  console.log('length',s1.length);
  console.log('code0',s1.codePointAt(0));
  // 取四个字节的字符
  console.log('code0',s1.codePointAt(0).toString(16));
  console.log('code1',s1.codePointAt(1));
  console.log('code2',s1.codePointAt(2));
}

{
  // ES5不能处理大于oxffff的Unicode字符
  console.log(String.fromCharCode("0x20bb7"));
  // ES6可以处理大于oxffff的Unicode字符
  console.log(String.fromCodePoint("0x20bb7"));
}

{
  let str='\u{20bb7}abc';
  for(let i=0;i<str.length;i++){
    console.log('es5',str[i]);
  }
  // ES6可以处理大于oxffff的Unicode字符
  for(let code of str){
    console.log('es6',code);
  }
}

{
  let str="string";
  console.log('includes',str.includes("c"));
  console.log('start',str.startsWith('str'));
  console.log('end',str.endsWith('ng'));
}

{
  let str="abc";
  // es6 字符串复制连接
  console.log(str.repeat(2));
}

{
  let name="list";
  let info="hello world";
  let m=`i am ${name},${info}`;
  console.log(m);
}

{
  // 字符串补白，在长度不足两位的时候，在数字前补充0
  console.log('1'.padStart(2,'0'));
  // 字符串补白，在长度不足两位的时候，在数字后补充0
  console.log('1'.padEnd(2,'0'));
}

// 标签模板
{
  let user={
    name:'list',
    info:'hello world'
  };
  console.log(abc`i am ${user.name},${user.info}`);
  function abc(s,v1,v2){
    console.log(s,v1,v2);
    return s+v1+v2
  }
}

{
  console.log(String.raw`Hi\n${1+2}`);
  console.log(`Hi\n${1+2}`);
}
