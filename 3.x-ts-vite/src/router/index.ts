/*
 * @Author: yongzhen.sun
 * @Date: 2022-10-28 16:40:08
 * @LastEditors: yongzhen.sun
 * @LastEditTime: 2022-12-27 11:41:37
 * @Description: file content
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// 引用路径大小写出错时 文件的热更新会失效
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
