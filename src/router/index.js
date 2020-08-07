import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import('../views/commons/Chat.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/commons/Profile-v2.vue')
  }
  //{
  //path: '/about',
  //name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  //}
]

const router = new VueRouter({
  //mode: 'history',
  //base: process.env.BASE_URL,
  base: '/NetDoc-Live/',
  routes
})

export default router
