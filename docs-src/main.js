import './register-components'
import Vue from 'vue'
import App from './App.vue'
import VituityUi from '../src'
import router from './router'
import store from './store'
Vue.config.productionTip = false
Vue.use(VituityUi)

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    this.$log.info('Loading App...')
    this.$log.warn('This is a test warning')
    this.$log.error('This is not really an error')
    this.$log.done('App Loaded')
  }
}).$mount('#app')
