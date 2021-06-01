
<template>
  <div id="app">
    <img src="./assets/logo.png" alt="">
    <div ref="msg">{{ msg }}</div>
    <button @click="change">change</button>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        msg: 'Hello World'
      }
    },
    methods: {
      change() {
        this.$nextTick(() => {
          console.log('nextTick', this.$refs.msg.innerText)
        })

        this.msg = 'Hello Vue'
        console.log('sync', this.$refs.msg.innerText)

        this.$nextTick().then(() => {
          console.log('nextTick with promise', this.$refs.msg.innerText)
        })
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
