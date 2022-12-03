/*
 * @Author: yongzhen.sun
 * @Date: 2022-07-20 15:45:25
 * @LastEditors: yongzhen.sun
 * @LastEditTime: 2022-12-03 23:20:13
 * @Description: file content
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx({})],
  server: {
    host: '0.0.0.0'
  }
})
