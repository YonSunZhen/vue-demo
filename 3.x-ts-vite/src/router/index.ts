/*
 * @Author: yongzhen.sun
 * @Date: 2022-10-28 16:40:08
 * @LastEditors: yongzhen.sun
 * @LastEditTime: 2022-11-01 14:52:41
 * @Description: file content
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import WatchDemo from '../components/watch/Watch.vue'
import Computed from '../components/Computed.vue'


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
]
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
