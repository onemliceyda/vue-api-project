import Vue from 'vue'
import Header from "./components/Header"
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {router} from "./router"
Vue.use(BootstrapVue)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
