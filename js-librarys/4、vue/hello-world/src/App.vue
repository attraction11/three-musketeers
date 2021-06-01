<template>
  <div id="app">
    <h1>Hello App!</h1>
    <div>root state count: {{count}}</div>
    <div>root getter computedCount: {{computedCount}}</div>
    <div>module A state count: {{aCount}}</div>
    <div>module A getter computedCount: {{aComputedCount}}</div>
    <div @click="increment">root mutation increment</div>
    <div @click="incrementAct">root action increment</div>
    <div @click="aIncrement">module A mutation increment</div>
    <div @click="aIncrementAct">module A action increment</div>
    <div @click="register">dynamic register</div>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

  export default {
    name: 'App',
    computed: {
      ...mapState([
        'count'
      ]),
      ...mapGetters([
        'computedCount'
      ]),
      ...mapState('a', {
        aCount: 'count'
      }),
      ...mapGetters('a', {
        aComputedCount: 'computedCount'
      })
    },
    methods: {
      ...mapMutations([
        'increment'
      ]),
      ...mapActions({
        incrementAct: 'increment'
      }),
      ...mapMutations('a', {
        aIncrement: 'increment'
      }),
      ...mapActions('a', {
        aIncrementAct: 'increment'
      }),
      register() {
        this.$store.registerModule('c', {
          namespaced: true,
          state: {
            count: 9
          },
          mutations: {
            increment(state) {
              state.count++
            }
          },
          actions: {
            increment(context) {
              context.commit('increment')
            }
          },
          getters: {
            computedCount(state) {
              return state.count + 1
            }
          }
        })
        console.log(this.$store)
      }
    }
  }
</script>

<style>
  #app {
    width: 400px;
    margin: 0 auto;
  }
</style>
