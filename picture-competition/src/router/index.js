import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/personal',
        name: 'Personal',
        component: () => import(/* webpackChunkName: "personal" */ '../views/Personal.vue')
      },

    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
