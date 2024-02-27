/*
 * @Author: qianhua.xiong
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
    children:[
      
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  { path: '/', redirect: { name: 'login' } }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
