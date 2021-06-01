// 1、类的基本定义及生成实例
{
  class Parent {
    constructor(name = 'mukewang') {
      this.name = name;
    }
  }

  let v_parent = new Parent('v');
  console.log('构造函数和实例', v_parent);
}

// 2、类的继承
{
  class Parent {
    constructor(name = 'mukewang') {
      this.name = name;
    }
  }

  class Child extends Parent {

  }

  console.log('继承', new Child());
}

// 3、类的继承传递参数
{
  class Parent {
    constructor(name = 'mukewang') {
      this.name = name;
    }
  }

  class Child extends Parent {
    constructor(name = 'child') {
      // super() 表示父类的构造函数，用于新建父类的this
      // 子类自己的this对象，必须要通过父类的构造函数完成塑造，
      // 得到与父类同样的属性和方法，再对其进行加工塑造。
      super(name);
      this.type = 'child';
    }
  }

  console.log('继承传递参数', new Child('hello'));
}

// 4、getter,setter
{
  class Parent {
    constructor(name = 'mukewang') {
      this.name = name;
    }

    get longName() {
      return 'mk' + this.name
    }

    set longName(value) {
      this.name = value;
    }
  }

  let v = new Parent();
  console.log('getter', v.longName);
  v.longName = 'hello';
  console.log('setter', v.longName);
}

// 5、通过类调用静态方法
{
  class Parent {
    constructor(name = 'mukewang') {
      this.name = name;
    }

    // 静态方法
    static tell() {
      console.log('tell');
    }
  }

  Parent.tell();

}

// 6、通过类调用静态属性
{
  class Parent {
    constructor(name = 'mukewang') {
      this.name = name;
    }

    static tell() {
      console.log('tell');
    }
  }

  // 静态属性
  Parent.type = 'test';

  console.log('静态属性', Parent.type);

}

// 7、ES5实现继承(方式一：组合继承)
{
  function person(name, age) {
    this.name = name
    this.age = age
  }

  person.prototype.sayName = function () {
    console.log('name:' + this.name)
  }

  function child(name, age, sex) {
    this.sex = sex
    person.call(this, name, age)
  }

  child.prototype = new person()
  /* 重新设置一下constructor 不设置也没有影响，严谨的角度上来说还是设置一下*/
  /* 不设置的话，__proto__ 上时没有 constructor */
  /* 正常来讲constructor是指向自身的 */
  child.prototype.constructor = child

  let p1 = new child('xiaoming', 12, 'man')
  let p2 = new child('xiaohong', 12, 'women')

  p1.sayName() // name:12
  p2.sayName() // name:12

  console.log(p1.prototype === p2.prototype) // true
  console.log(p1.__proto__ === child.prototype) // true
}

// 8、ES5实现继承(方式二：寄生组合继承)
{
  function person(name, age) {
    this.name = name
    this.age = age
  }

  person.prototype.sayName = function () {
    console.log('name:' + this.name)
  }

  function child(name, age, sex) {
    this.sex = sex
    person.call(this, name, age)
  }

  child.prototype = Object.create(person.prototype)
  child.prototype.constructor = child

  // 向原型中添加方法(必须在构建原型链之后)
  child.prototype.sayAge = function () {
    console.log('age:' + this.age)
  }

  let p = new child('xiaoming', 12, 'man')

  p.sayName() // name:12
  p.sayAge() // age:12
}


/**********************************分割线*******************************************/
// 总结ES5继承，对比组合继承和寄生组合继承
// 1、组合继承核心思想：使用借用构造函数的技术实现实例属性的继承，使用原型链实现原型属性和方法的继承。
// 2、寄生组合继承的好处：在于只调用了一次SuperType构造函数，并且child.prototype上没有多余的属性。
// 3、寄生组合继承是引用类型最理想的继承方式
