import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    component: () => import('../views/home.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 挂在路由导航守卫控制权限管理
router.beforeEach((to, from, next) => {
  // 如果是登陆页放行继续操作
  if (to.path === '/login') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  // 如果token没有值，则强制跳转到登录页
  if (!tokenStr) return next('/login')
  next()
})

export default router
