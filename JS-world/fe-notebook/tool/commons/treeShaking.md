In addition to enabling the use of ES6 modules, Rollup also statically analyzes the code you are importing, and will exclude anything that isn't actually used. This allows you to build on top of existing tools and modules without adding extra dependencies or bloating the size of your project.

tree-shaking 其实也确实不是什么特别神的东西，原理而言 @顾轶灵 的回答已经讲得比较清楚了，我想指出的一点就是不管是 rollup 还是 webpack 2，tree-shaking 都是因为 ES6 modules 的静态特性才得以实现的。

ES6 modules 的 import 和 export statements 相比完全动态的 CommonJS require，有着本质的区别。

举例来说：

1. 只能作为模块顶层的语句出现，不能出现在 function 里面或是 if 里面。（ECMA-262 15.2)
2. import 的模块名只能是字符串常量。(ECMA-262 15.2.2)
3. 不管 import 的语句出现的位置在哪里，在模块初始化的时候所有的 import 都必须已经导入完成。换句话说，ES6 imports are hoisted。(ECMA-262 15.2.1.16.4 - 8.a)
4. import binding 是 immutable 的，类似 const。比如说你不能 import { a } from './a' 然后给 a 赋值个其他什么东西。(ECMA-262 15.2.1.16.4 - 12.c.3)

这些设计虽然使得灵活性不如 CommonJS 的 require，但却保证了 ES6 modules 的依赖关系是确定 (deterministic) 的，和运行时的状态无关，从而也就保证了 ES6 modules 是可以进行可靠的静态分析的。对于主要在服务端运行的 Node 来说，所有的代码都在本地，按需动态 require 即可，但对于要下发到客户端的 web 代码而言，要做到高效的按需使用，不能等到代码执行了才知道模块的依赖，必须要从模块的静态分析入手。这是 ES6 modules 在设计时的一个重要考量，也是为什么没有直接采用 CommonJS。正是基于这个基础上，才使得 tree-shaking 成为可能（这也是为什么 rollup 和 webpack 2 都要用 ES6 module syntax 才能 tree-shaking），所以说与其说 tree-shaking 这个技术怎么了不起，不如说是 ES6 module 的设计在模块静态分析上的种种考量值得赞赏。

---

关于 closure compiler 原来我说的是错的，最新版本的 closure compiler 支持 ES6 modules 并且也有 tree shaking 的实际效果，但是对规范的支持还不是很完善，比如不支持 wildcard export。而且说真的，advanced mode 用起来限制太多了...


[](https://www.zhihu.com/question/41922432)