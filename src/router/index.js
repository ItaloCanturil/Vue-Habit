import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/PageRegister.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/dashboard/Index'),
    children: [
      {
        path: '/',
        component: () => import('@/views/dashboard/HabitTracker'),
      }
    ]
  },
  {
    name: 'Register',
    path: '/register',
    component: Register
  },
  {
    name: 'Login',
    path: '/login',
    component: () => import('../views/PageLogin.vue')
  },
  {
    name: 'Home',
    path: '/home',
    component: () => import('../views/PageHome.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('token')

  if(authRequired && !loggedIn) next('/login'); 
  else next();
})

export default router
