import Vue from 'vue'
import App from './App'
import Test from './components/Test'
import store from './store'

Vue.component('app', App)
Vue.component('test', Test)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  store
})
