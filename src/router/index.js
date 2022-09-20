import Vue from 'vue'
import VueRouter from 'vue-router'


import Login from '../views/login/index'
import Home from '../views/home/index'
import NotFound from '../views/errorPage/404'
import Forbidden from '../views/errorPage/403'
import Layout from '../views/layout/index'

Vue.use(VueRouter)

// 初始化路由
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

// 动态加载路由 根路由
export const DynamicRoutes = [
  {
    path: "",
    component: Layout,
    name: 'container',
    redirect: "home",
    meta:{
      requiresAuth: true, // true为需要登录权限认证
      name: "首页"
    },
    children:[
      {
        path: "home",
        component: Home,
        name: "home",
        meta:{
          // 匹配规则
          name: "首页",
          icon: "icon-name"
        },
      }
    ]
  },
  {
    path:"/403",
    component: Forbidden
  },
  {
    path:"*",
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
