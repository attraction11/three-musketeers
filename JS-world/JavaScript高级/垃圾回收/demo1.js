// 1、引用计数垃圾收集，该算法有个限制：无法处理循环引用
// 此算法把“对象是否不再需要”简化定义为“对象有没有其他对象引用到它”。
// 如果没有引用指向该对象（零引用），对象将被垃圾回收机制回收。
var o = {
  a: {
    b:2
  }
};
// 两个对象被创建，一个作为另一个的属性被引用，另一个被分配给变量o
// 很显然，没有一个可以被垃圾收集


var o2 = o; // o2变量是第二个对“这个对象”的引用

o = 1;      // 现在，“这个对象”的原始引用o被o2替换了

var oa = o2.a; // 引用“这个对象”的a属性
// 现在，“这个对象”有两个引用了，一个是o2，一个是oa

o2 = "yo"; // 最初的对象现在已经是零引用了
           // 他可以被垃圾回收了
           // 然而它的属性a的对象还在被oa引用，所以还不能回收

oa = null; // a属性的那个对象现在也是零引用了
           // 它可以被垃圾回收了



// 2、标记-清除算法，这个算法把“对象是否不再需要”简化定义为“对象是否可以获得”。
// 限制: 那些无法从根对象查询到的对象都将被清除
// 尽管这是一个限制，但实践中我们很少会碰到类似的情况，所以开发者不太会去关心垃圾回收机制。
