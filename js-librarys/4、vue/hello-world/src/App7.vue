<template>
  <div id="app">
  <hello-world :flag="flag"></hello-world>
    <button @click="toggle">toggle</button>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld'
  export default {
    name: 'App',
    components: {HelloWorld},
    data() {
      return {
        flag: true
      }
    },
    methods: {
      toggle() {
        this.flag = !this.flag
      }
    }
  }
</script>

<style>
  #app {
    width: 200px;
    margin: 0 auto;
  }
</style>
