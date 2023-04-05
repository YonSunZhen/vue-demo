/*
 * @Author: yongzhen.sun
 * @Date: 2022-07-20 15:45:25
 * @LastEditors: yongzhen.sun
 * @LastEditTime: 2023-04-05 16:20:55
 * @Description: file content
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx({}), AutoImport({
    imports: ['vue'], dts: 'src/auto-import.d.ts'
  })],
  server: {
    host: '0.0.0.0'
  }
})
