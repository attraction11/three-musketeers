### Tree Shaking

Tree shaking 是一个术语，通常用来描述移除 JavaScript 上下文中无用代码这个过程，或者更准确的说是按需引用代码，它依赖于 ES2015 模块系统中 import/export 的静态结构特性。这个术语和概念实际上是兴起于 ES2015 模块打包工具 rollup。

webpack 2 原生支持 ES6 模块 (别名 harmony modules) ，并能检测出未使用的模块输出。

