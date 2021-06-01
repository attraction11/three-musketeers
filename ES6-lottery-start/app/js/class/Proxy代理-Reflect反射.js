// Proxy代理，Reflect反射
// Proxy可以理解为在目标对象前架设一道拦截，外界对对象的访问和修改都必须通过这层拦截。
// 1、通过这种机制可以实现对外界访问的修改和过滤。
{
  // Proxy接收两个参数，一个是所要代理的目标对象，另一个是配置每个被代理的操作的处理函数
  const obj = new Proxy({}, {
    get(target, key, receiver) {
      console.log(`getting ${key}!`);
      return Reflect.get(target, key, receiver);
    },
    set(target, key, value, receiver) {
      console.log(`setting ${key}!`);
      return Reflect.set(target, key, value, receiver);
    }
  });
}

// 2、Proxy拦截对象的各种操作
{
  // 创建类似供应商的对象
  let obj={
    time:'2017-03-11',
    name:'net',
    _r:123
  };

  // 创建代理商（代理对象，代理方法）
  let monitor=new Proxy(obj,{
    // 拦截对象属性的读取
    get(target,key){
      return target[key].replace('2017','2018')
    },
    // 拦截对象设置属性
    set(target,key,value){
      if(key==='name'){
        return target[key]=value;
      }else{
        return target[key];
      }
    },
    // 拦截key in object操作
    has(target,key){
      if(key==='name'){
        return target[key]
      }else{
        return false;
      }
    },
    // 拦截delete
    deleteProperty(target,key){
      if(key.indexOf('_')>-1){
        delete target[key];
        return true;
      }else{
        return target[key]
      }
    },
    // 拦截Object.keys,
    // Object.getOwnPropertySymbols,
    // Object.getOwnPropertyNames
    ownKeys(target){
      // 保护time属性
      return Object.keys(target).filter(item=>item!='time')
    }
  });

  console.log('get',monitor.time);

  monitor.time='2018';
  monitor.name='mukewang';
  console.log('set',monitor.time,monitor); // {time: "2017-03-11", name: "mukewang", _r: 123}

  console.log('has','name' in monitor,'time' in monitor); // has true false

  delete monitor.time;
  console.log('delete',monitor);
  //
  delete monitor._r;
  console.log('delete',monitor);
  console.log('ownKeys',Object.keys(monitor));

}

// 3、Reflect读取对象
{
  let obj={
    time:'2017-03-11',
    name:'net',
    _r:123
  };

  console.log('Reflect get',Reflect.get(obj,'time'));
  Reflect.set(obj,'name','mukewang');
  console.log(obj);
  console.log('has',Reflect.has(obj,'name'));
}

// 4、数据校验比较适合用Proxy解决
{
  function validator(target,validator){
    return new Proxy(target,{
      _validator:validator,
      set(target,key,value,proxy){
        if(target.hasOwnProperty(key)){
          let va=this._validator[key];
          if(!!va(value)){
            return Reflect.set(target,key,value,proxy)
          }else{
            throw Error(`不能设置${key}到${value}`)
          }
        }else{
          throw Error(`${key} 不存在`)
        }
      }
    })
  }

  const personValidators={
    name(val){
      return typeof val==='string'
    },
    age(val){
      return typeof val === 'number' && val>18
    },
    mobile(val){

    }
  }

  class Person{
    constructor(name,age){
      this.name=name;
      this.age=age;
      this.mobile='1111';
      return validator(this,personValidators)
    }
  }

  const person=new Person('lilei',30);

  console.info(person);

  person.name='Han mei mei';

  console.info(person);
}

/***************************分割线******************************/
// Proxy支持的拦截操作如下
// 1、get(target, propKey, receiver)：拦截对象属性的读取
// 2、set(target, propKey, value, receiver)：拦截对象属性的设置
// 3、has(target, propKey)：拦截propKey in proxy的操作，返回一个布尔值。
// 4、deleteProperty(target, propKey)：拦截delete proxy[propKey]的操作，返回一个布尔值
// 5、ownKeys(target)：拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环，
// 返回一个数组。该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性。
// 6、getOwnPropertyDescriptor(target, propKey)：拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。
// 7、defineProperty(target, propKey, propDesc)：拦截Object.defineProperty(proxy, propKey, propDesc）、
// Object.defineProperties(proxy, propDescs)，返回一个布尔值。
// 8、preventExtensions(target)：拦截Object.preventExtensions(proxy)，返回一个布尔值。
// 9、getPrototypeOf(target)：拦截Object.getPrototypeOf(proxy)，返回一个对象。
// 10、isExtensible(target)：拦截Object.isExtensible(proxy)，返回一个布尔值。
// 11、setPrototypeOf(target, proto)：拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
// 12、apply(target, object, args)：拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。
// 13、construct(target, args)：拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)。
