import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/bmap',
    name: 'BMap',
    component: () => import('../views/Bmap.vue')
  },
  {
    path: '/liquidFill',
    name: 'LiquidFill',
    component: () => import('../views/LiquidFill.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
