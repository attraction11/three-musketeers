// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// Vue.config.productionTip = false

// 第三章：组件化
// 1、组件渲染
// new Vue({
//   el: '#app',
//   render(h) {
//     return h(App)
//   }
// })


// 2、配置合并
// let childComp = {
//   template: '<div>{{msg}}</div>',
//   created() {
//     console.log('child created')
//   },
//   mounted() {
//     console.log('child mounted')
//   },
//   data() {
//     return {
//       msg: 'hello vue'
//     }
//   }
// }
//
// Vue.mixin({
//   created() {
//     console.log('parent created')
//   },
// })
//
// new Vue({
//   el: '#app',
//   render: h => h(childComp)
// })


// 3、组件注册
// Vue.component('app', App)
//
// new Vue({
//   el: '#app',
//   template: '<app></app>'
// })

// 4、异步组件

// 工厂函数
// Vue.component('HelloWorld', function (resolve, reject) {
//   // 这个特殊的 require 语法告诉 webpack
//   // 自动将编译后的代码分割成不同的块
//   require(['./components/HelloWorld'], function (res) {
//     resolve(res)
//   })
// })

// promise方式
// Vue.component('HelloWorld',
//   // 该'import'函数返回一个‘promise’对象
//   () => import('./components/HelloWorld.vue')
// )

// 高级异步组件
const LoadingComp = {
  template: '<div>loading</div>'
}

const ErrorComp = {
  template: '<div>error</div>'
}

const AsyncComp = {
  // 需要加载的组件，应当是一个promise
  component: import('./components/HelloWorld.vue'),
  // 加载中应当渲染的组件
  loading: LoadingComp,
  // 出错时应当渲染的组件
  error: ErrorComp,
  // 渲染加载中组件前的等待时间，默认200ms
  delay: 200,
  // 最长等待时间，超出此时间则渲染错误组件，默认：Infinity
  timeout: 1000
}

Vue.component('HelloWorld', AsyncComp)

new Vue({
  el: '#app',
  render(h) {
    return h(App)
  }
})
