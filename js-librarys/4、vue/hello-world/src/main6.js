// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'

const CompA = {
  template: `<div><p>name:{{name}}</p><p>nickName:{{nickName}}</p></div>`,
  props: {
    'name': {
      type: String,
      required: true
    },
    'nickName': [Boolean, String]
  }
}

const CompB = {
  template: `<div>
              <p>age:{{age}}</p>
              <p>sex:{{sex}}</p>
              <p>ball:{{hobby.ball}}</p>
              <p>game:{{hobby.game}}</p>
            </div>`,
  props: {
    age: Number,
    sex: {
      type: String,
      default: 'female',
      validator(value) {
        return value === 'male' || value === 'female'
      }
    },
    hobby: {
      type: Object,
      default() {
        return {
          ball: 'basketball',
          game: 'Dota2'
        }
      }
    }
  },
  watch: {
    hobby() {
      console.log('hobby update')
    }
  }
}

new Vue({
  el: '#app',
  components: {CompA, CompB},
  data: {
    age: 18,
    hobby: {
      ball: 'basketball',
      game: 'Dota2'
    }
  },
  methods: {
    onClick() {
      // this.age++
      // this.hobby.game = 'LOL'
      this.hobby = {
        ball: '21',
        game: '44'
      }
    }
  },
  template: `<div>
              <!--<comp-a name="Jackson" nick-name="nick"></comp-a>-->
              <comp-b :age="age" sex="male" :hobby="hobby"></comp-b>
              <button @click="onClick">add age</button>
            </div>`
})

