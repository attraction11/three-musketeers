// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

Vue.use(VueRouter)

// 1、定义(路由)组件
// 可以从其他文件import进来
const Foo = {
  template: '<div><div>foo</div>'+
            '<router-link to="/foo/bar" :append="true">Go to Bar</router-link>'+
            '<router-view></router-view>'+
            '</div>',
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件对应的路由被 confirm 前调用
    // 不！能！获取组件实例“this”
    // 因为当守卫执行前，组件的实例还没有创建
    console.log('foo before router enter')
    console.log('this?', this);
    next((vm) => {
      console.log('now this?' + vm)
    })
  }
}
const Bar = {
  template: '<div>bar</div>',
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例“this”
    console.log('bar before router leave')
    next()
  }
}

// 2、定义路由
// 每个路由应该映射一个组件。其中“component”可以是
// 通过Vue.extend()创建的组件构造器
// 或者只是一个组件配置对象
const routes = [
  {
    path: '/foo',
    component: Foo,
    children: [
      {
        path: 'bar',
        component: Bar,
        beforeEnter(to, from, next) {
          console.log('bar before enter')
          next()
        }
      }
    ]
  },

]

// 3、创建router实例，然后传`routes`配置
// 你也可以传别的配置参数
const router = new VueRouter({
  routes // (缩写)相当于routes: routes
})


router.beforeEach((to, from, next) => {
  console.log('global before each')
  next()
})

router.afterEach((to, from) => {
  console.log('global after each')
})

router.beforeResolve((to, from, next) => {
  console.log('global before resolve')
  next()
})

// 4、创建和挂载根实例
// 记得要通过router配置参数注入路由
// 从而让整个应用都有路由功能
let app = new Vue({
  el: '#app',
  render(h) {
    return h(App)
  },
  router
})


