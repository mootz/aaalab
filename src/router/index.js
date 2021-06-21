import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: { name: 'Home_country' },
    children: [
      {
        path: 'countries',
        name: 'Home_country',
        component: () => import('../components/home/Home_country')
      },
      {
        path: 'cultures',
        name: 'Home_culture',
        component: () => import('../components/home/Home_culture')
      },
      {
        path: 'extremes',
        name: 'Home_extreme',
        component: () => import('../components/home/Home_extreme')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
