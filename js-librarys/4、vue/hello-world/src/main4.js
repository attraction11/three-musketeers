// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.component('app', App)

let app = new Vue({
  el: '#app',
  template: '<app></app>'
})
