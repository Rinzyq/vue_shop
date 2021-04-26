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
    redirect: '/welcome',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/welcome',
        component: () => import('../components/welcome.vue')
      },
      {
        path: '/users',
        component: () => import('../components/user/Users.vue')
      },
      {
        path: '/rights',
        component: () => import('../components/power/Rights.vue')
      },
      {
        path: '/roles',
        component: () => import('../components/power/Roles.vue')
      },
      {
        path: '/categories',
        component: () => import('../components/goods/Goods_cate.vue')
      },
      {
        path: '/params',
        component: () => import('../components/goods/Goods_Params.vue')
      },
      {
        path: '/goods',
        component: () => import('../components/goods/Goods_List.vue')
      },
      {
        path: '/goods/add',
        component: () => import('../components/goods/Add.vue')
      },
      {
        path: '/orders',
        component: () => import('../components/order/Order.vue')
      },
      {
        path: '/reports',
        component: () => import('../components/report/report.vue')
      }
    ]
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
