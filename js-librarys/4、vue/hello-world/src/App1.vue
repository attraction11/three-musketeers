<template>
    <div id="app">
        <img src="./assets/logo.png">
        <div ref="msg" v-if="flag">
            {{msg}}
        </div>
        <div v-else>
            {{msg1}}
        </div>
        <div>{{test}}</div>
        <ul>
            <li v-for="item in items">{{item}}</li>
        </ul>
        <button @click="add">add</button>
        <button @click="change">change</button>
        <button @click="changeMsg">changeMsg</button>
        <button @click="toggle">toggle</button>
        <HelloWorld/>
    </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld'
  import Vue from 'vue'

  export default {
    name: 'App',
    data() {
      return {
        flag: true,
        test: {
          a: 'hello'
        },
        items: [1, 2],
        msg: 'hello msg',
        msg1: 'hello msg1'
      }
    },
    components: {
      HelloWorld
    },
    methods: {
      change() {
        // this.items[1] = 3
        Vue.set(this.items, 1, 3)
      },
      add() {
        // this.msg.b = 'Vue'
        Vue.set(this.test, 'b', 'Vue')
        // this.items[2] = 4
        this.items.push(4)
      },
      changeMsg() {
        this.$nextTick(() => {
          console.log('nextTick:', this.$refs.msg.innerText)
        })
        this.msg = 'hello world'
        console.log('sync:', this.$refs.msg.innerText)
        this.$nextTick().then(() => {
          console.log('nextTick width promise:', this.$refs.msg.innerText)
        })
      },
      toggle() {
        this.flag = !this.flag
      }
    }
    // user watch 无限循环
    // watch: {
    //   msg() {
    //     this.msg = Math.random()
    //   }
    // }
  }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
