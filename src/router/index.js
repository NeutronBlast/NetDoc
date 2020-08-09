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
    component: () => import('../views/commons/Profile.vue')
  },
  {
    path: '/communities',
    name: 'Communities',
    component: () => import('../views/commons/Communities.vue')
  },
  {
    path: '/list-research',
    name: 'List-Research',
    component: () => import('../views/doctor/List-Research.vue')
  },
  {
    path: '/research',
    name: 'Research',
    component: () => import('../views/doctor/Research.vue')
  },
  {
    path: '/diseases',
    name: 'Searcher',
    component: () => import('../views/commons/DiseaseSearcher.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/commons/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/commons/Register.vue')

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
