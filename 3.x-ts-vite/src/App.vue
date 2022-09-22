<!--
 * @Author: yongzhen.sun
 * @Date: 2022-07-20 15:45:25
 * @LastEditors: yongzhen.sun
 * @LastEditTime: 2022-09-22 09:04:50
 * @Description: file content
-->
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <button @click="test">haha</button>
  <Computed :test="computedTest"/>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Computed from './components/Computed.vue'

const test = () => {
  console.log('debug2')
  computedTest.value.name = 2
}

const computedTest = ref({
  name: 1
})



</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
