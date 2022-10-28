/*
 * @Author: yongzhen.sun
 * @Date: 2022-10-28 16:40:08
 * @LastEditors: yongzhen.sun
 * @LastEditTime: 2022-10-28 17:18:25
 * @Description: file content
 */
import type { Plugin } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import WatchDemo from '../components/watch/watch.vue'
import Computed from '../components/Computed.vue'


const routes = [
  {
    path: '/',
    redirect: '/watch'
  },
  {
    path: '/watch',
    component: Computed
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
