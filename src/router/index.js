import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'signup',
    component: () => import('../components/Signup.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../components/ForgotPassword.vue')
  },
  {
    path: '/routine',
    name: 'routine-main',
    component: () => import('../components/RoutineListContainer.vue')
  },
  {
    path: '/routine/create',
    name: 'new-routine',
    component: () => import('../components/NewRoutine.vue') 
  },
  {
    path: '/routine/view/:id',
    name: 'view-routine',
    props: true,
    component: () => import('../components/NewRoutine.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
