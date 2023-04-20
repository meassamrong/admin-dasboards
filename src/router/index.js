import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    // component: Dashboard
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/createItem',
    name: 'Create-Items',
    component: () => import('../views/CreateItem.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
