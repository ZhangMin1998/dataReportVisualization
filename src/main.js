import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import * as eCharts from 'echarts'

Vue.config.productionTip = false
Vue.prototype.$echarts = eCharts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
