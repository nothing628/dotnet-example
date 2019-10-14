import Vue from 'vue'
import Test from './components/Test'
import store from './store'

Vue.component('test', Test)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  store
})
