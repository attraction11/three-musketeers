// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import createLogger from 'vuex/dist/logger'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

const moduleA = {
  namespaced: true,
  state: {
    count: 5
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    }
  },
  getters: {
    computedCount(state, getter) {
      console.log(getter)
      return state.count + 1
    }
  }
}

const moduleB = {
  namespaced: true,
  state: {
    count: 3
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    }
  },
  getters: {
    computedCount(state) {
      return state.count + 1
    }
  }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  },
  state: {
    count: 1
  },
  getters: {
    computedCount(state) {
      return state.count + 1
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
    increment(context) {
      return new Promise((resolve) => {
        setTimeout(() => {
          context.commit('increment')
          resolve(context.rootState)
        }, 1000)
      })

    }
  },
  strict: true,
  plugins: debug ? [createLogger({
    collapsed: false
  })] : []
})

window.store  = store

// 打印state与getters的值
console.log(store)
// console.log(store.state.count)
// console.log(store.getters.computedCount)
// console.log(store.state.a.count)
// console.log(store.getters['a/computedCount'])

// 打印state数据的修改
// console.log(store)
// store.commit('increment')
// console.log(store.state.count)
// store.dispatch('increment').then((rootState) => {
//   console.log(rootState.count)
// })
// console.log(store.state.count)


let app = new Vue({
  el: '#app',
  render(h) {
    return h(App)
  },
  store
})


