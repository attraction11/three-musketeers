// 许多面向对象的语言都有修饰器（Decorator）函数，用来修改类的行为
// 需要安装插件babel-plugin-transform-decorators-legacy
// 由于存在函数提升，使得装饰器不能用于函数。类是不会提升的，所以就没有这方面的问题。
// 第三方库修饰器的js库：core-decorators; npm install core-decorators

// 1、修饰器--方法的修饰
{
  // 装饰器第一个参数是类的原型对象
  let readonly=function(target,name,descriptor){
    target.test=1;
    descriptor.writable=false;
    return descriptor
  };

  class Test{
    @readonly
    time(){
      return '2017-03-11'
    }
  }

  let test=new Test();

  console.log(test.time(),test.test);
}

// 2、修饰器--类的修饰(静态属性)
{
  // 装饰器第一个参数是类的本身
  let typename=function(target,name,descriptor){
    target.myname='hello';
  }

  @typename
  class Test{

  }

  console.log('类修饰符',Test.myname);
}

// 3、修饰器--方法修饰
{
  // 装饰器第一个参数是类的原型对象
  // 利用修饰器将日志系统代码抽离出去，便于维护
  // 如果一个参数不够用，可以在装饰器外面再封装一层函数。
  // 装饰器log可以接受参数，就等于可以修改装饰器的行为
  let log=(type)=>{
    return function(target,name,descriptor){
      let src_method=descriptor.value;
      descriptor.value=(...arg)=>{
        src_method.apply(target,arg);
        console.info(`log ${type}`);
      }
    }
  }

  class AD{
    @log('show')
    show(){
      console.info('ad is show')
    }
    @log('click')
    click(){
      console.info('ad is click');
    }
  }

  let ad=new AD();
  ad.show();
  ad.click();
}

/**********************************分割线*******************************************/
// 1、由于存在函数提升，使得装饰器不能用于函数。类是不会提升的，所以就没有这方面的问题
// 2、更多关于装饰器的用法参见：https://github.com/jayphelps/core-decorators
// 3、Trait 也是一种装饰器，效果与 Mixin 类似。参见：https://github.com/CocktailJS/traits-decorator
