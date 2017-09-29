import Vue from 'vue'
import Quasar from 'quasar'
import router from './router'
export default (context) => {
  return Promise.resolve(Quasar.start(() => {
    new Vue({
      el: '#alenvi-app',
      router,
      render: h => h(require('./App'))
    })
  }))
}
