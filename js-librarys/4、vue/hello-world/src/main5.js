// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 1、工厂函数实现异步组件
// Vue.component('HelloWorld', function (resolve, reject) {
//   // 这个特殊的 require 语法告诉 webpack
//   // 自动将编译后的代码分割成不同的块
//   require(['./components/HelloWorld'], function (res) {
//     resolve(res)
//   })
// })


// 2、Promise实现异步组件
// Vue.component('HelloWorld',
//     // 该'import'函数返回一个'promise'对象
//     () => import('./components/HelloWorld.vue')
// )


// 3、高级异步组件
const LoadingComp = {
  template: '<div>loading</div>'
}

const ErrorComp = {
  template: '<div>error</div>'
}

const AsyncComp = () => ({
  // 需要加载一个组件
  component: import('./components/HelloWorld.vue'),
  loading: LoadingComp,
  error: ErrorComp,
  delay: 200,
  timeout: 1000,

})


Vue.component('HelloWorld', AsyncComp)


new Vue({
  el: '#app',
  render(h) {
    return h(App)
  }
})

