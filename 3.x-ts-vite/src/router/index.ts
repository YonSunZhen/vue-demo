/*
 * @Author: yongzhen.sun
 * @Date: 2022-10-28 16:40:08
 * @LastEditors: yongzhen.sun
 * @LastEditTime: 2022-12-27 11:10:42
 * @Description: file content
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import WatchDemo from '../components/watch/Watch.vue'
import Computed from '../components/Computed.vue'
import Rxjs from '../components/Rxjs.vue'
import Tsx from '../components/Tsx/tsx.vue'


const routes = [
  {
    path: '/',
    redirect: '/watch'
  },
  {
    path: '/watch',
    name: 'watch',
    component: WatchDemo
  },
  {
    path: '/rxjs',
    name: 'rxjs',
    component: Rxjs
  },
  {
    path: '/tsx',
    name: 'tsx',
    component: Tsx
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
