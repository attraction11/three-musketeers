<template>
    <div id="app">
        <JkFirstComponent :items="cityList"></JkFirstComponent>
    </div>
</template>

<script>
  import JkFirstComponent from './components/index.js'

  export default {
    name: 'app',
    components: {
      JkFirstComponent
    },
    data() {
      return {
        cityList: [
          '北京', '上海', '广州', '深圳'
        ]
      }
    }
  }
</script>
