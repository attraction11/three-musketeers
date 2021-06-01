<template>
  <div id="app">
    <img src="./assets/logo.png" alt="">
    <div>
      {{msg}}
    </div>
    <ul>
      <li v-for="item in items">{{item}}</li>
    </ul>
    <button @click="add">add</button>
    <button @click="change">change</button>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: 'App',
    data() {
      return {
        msg: {
          a: 'Hello'
        },
        items: [1, 2]
      }
    },
    methods: {
      change() {
        // this.items[1] = 3
        Vue.set(this.items, 1, 3)
      },
      add() {
        // this.msg.b = 'Vue'
        Vue.set(this.msg, 'b', 'Vue')
        // this.items[2] = 4
        this.items.push(4)
      }
    }
  }
</script>

<style>
  #app{
    width: 200px;
    margin: 0 auto;
  }
</style>
