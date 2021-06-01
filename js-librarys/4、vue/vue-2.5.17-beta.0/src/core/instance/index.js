import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

// Vue是用函数实现的一个类，
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

// 思考vue为什么使用函数来定义一个类而不是class？

// 因为函数可以更好的扩展原型上的方法，
// 按照vue的模块组织关系将原型方法拆分到不同的文件下方便代码的管理。

// Vue类上面挂了许多原型方法
initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
