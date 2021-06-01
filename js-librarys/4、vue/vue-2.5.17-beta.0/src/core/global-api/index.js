/* @flow */

import config from '../config'
import { initUse } from './use'
import { initMixin } from './mixin'
import { initExtend } from './extend'
import { initAssetRegisters } from './assets'
import { set, del } from '../observer/index'
import { ASSET_TYPES } from 'shared/constants'
import builtInComponents from '../components/index'

import {
  warn,
  extend,
  nextTick,
  mergeOptions,
  defineReactive
} from '../util/index'

// Vue类上面挂了许多全局的静态方法
export function initGlobalAPI (Vue: GlobalAPI) {
  // config
  const configDef = {}
  configDef.get = () => config
  if (process.env.NODE_ENV !== 'production') {
    configDef.set = () => {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      )
    }
  }
  // Vue.config 是一个对象，包含 Vue 的全局配置。可以在启动应用之前修改下列属性
  Object.defineProperty(Vue, 'config', configDef)

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn,
    extend,
    mergeOptions,
    defineReactive
  }

  Vue.set = set
  Vue.delete = del
  Vue.nextTick = nextTick

  Vue.options = Object.create(null)
  // 合并  'component','directive','filter'中的方法到Vue.options属性
  ASSET_TYPES.forEach(type => {
    Vue.options[type + 's'] = Object.create(null)
  })

  //用于标识“基”构造函数以扩展所有plain-object
  //在Weex的多实例场景中的组件。
  Vue.options._base = Vue

  // 将keep-alive组件扩展到Vue.options.components
  extend(Vue.options.components, builtInComponents)

  // 定义Vue.use()、Vue.mixin()、Vue.extend()方法
  initUse(Vue)
  initMixin(Vue)
  initExtend(Vue)
  // 定义Vue.component()、Vue.directive()、Vue.filter()方法
  initAssetRegisters(Vue)
}
