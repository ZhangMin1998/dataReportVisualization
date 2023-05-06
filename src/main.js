import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/index.css'
import './plugins/element.js'
// import './plugins/vcharts.js' // v-charts
import * as eCharts from 'echarts'

import VueECharts from 'vue-echarts'

Vue.config.productionTip = false
Vue.prototype.$echarts = eCharts

// 注册组件后即可使用
Vue.component('v-chart', VueECharts)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
