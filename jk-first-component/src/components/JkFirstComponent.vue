<template>
    <ul>
        <li v-for="(item, index) in items" :key="index">{{item}}</li>
    </ul>
</template>

<script>
  export default {
    props: {
      items: Array
    }
  }
</script>

<style scoped>
    ul{
        background-color: pink;
    }
    ul li{
        list-style: decimal;
    }
</style>
