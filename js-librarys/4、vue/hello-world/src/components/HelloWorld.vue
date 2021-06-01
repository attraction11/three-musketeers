<template>
  <div v-if="flag" class="hello" @click="changeMsg">
      <img src="../assets/logo.png">
    <h1>{{ nested.msg }}</h1>
  </div>
  <ul v-else>
    <li>都干啥</li>
    <li>等我</li>
    <li>的萨瓦</li>
    <li>购房</li>
    <li>委屈</li>
  </ul>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['flag'],
  data () {
    return {
        nested: {
          msg: 'Hello Vue!'
        }
    }
  },
  methods: {
    changeMsg() {
      this.nested.msg = 'Hello World!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  cursor: pointer;
}
</style>
