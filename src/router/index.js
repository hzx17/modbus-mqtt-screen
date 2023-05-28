import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import(/* webpackChunkName: "Index" */ '../pages/login.vue')

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', redirect: '/index' },
    { path: '/login', component: Login },
    {
      path: '/index',
      // name: '首页',
      component: () => import('../pages/index.vue'),
      children: [
        {
          path: '',
          name: '大屏首页',
          component: () => import('@/pages/content_layout')
        },
        {
          path: 'historical',
          name: '历史数据图',
          component: () => import('@/pages/history_data.vue')
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  // to要去的路径 form哪个路径跳转过来 next 函数 放行  next() next('/login')强制跳转
  if (to.path === '/login') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})
export default router
