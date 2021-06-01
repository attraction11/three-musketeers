// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

let Child = {
  template: '<button @click="clickHandler($event)">click me</button>',
  methods: {
    clickHandler(e) {
      console.log('Button clicked!', e)
      this.$emit('select')
    }
  }
}

let vm = new Vue({
  el: '#app',
  template: '<div><child @select="selectHandler" @click.native.prevent="clickHandler"></child></div>',
  methods: {
    clickHandler() {
      console.log('child clicked!')
    },
    selectHandler() {
      console.log('child select!')
    }
  },
  components:{ Child }
})
