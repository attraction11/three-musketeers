<template>
  <div id="app">
    <img src="./assets/logo.png" alt="">
    <div>
      {{name}}
    </div>
    <button @click="change">change</button>
    <button @click="changeLast">change last name</button>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        firstName: 'Yi',
        lastName: 'Huang',
        useless: 0,
        nested: {
          a: {
            b: 1
          }
        },
      }
    },
    computed: {
      name() {
        if (this.useless > 0) {
          return this.firstName + ',' + this.lastName
        }
        return 'please click change'
      }
    },
    methods: {
      change() {
        this.useless++
        this.nested.a.b = 2
      },
      changeLast() {
        this.lastName = 'Zhang'
      }
    },
    watch: {
      useless(newVal) {
        console.log('useless', newVal)
      },
      name: {
        immediate: true,
        handler(newVal) {
          console.log('name', newVal)
        }
      },
      nested: {
        deep: true,
        sync: true,
        handler(newVal) {
          console.log('nested', newVal.a.b)
        }
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
