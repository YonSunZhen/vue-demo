<!--
 * @Author: yongzhen.sun
 * @Date: 2022-09-22 08:47:05
 * @LastEditors: yongzhen.sun
 * @LastEditTime: 2022-12-27 11:14:15
 * @Description: file content
-->
<template>
  <button @click="clickRef">ref11</button>
  <button @click="clickReactive">reactive11</button>
  </template>
  
  <script lang="ts" setup name="WatchDemo">
  import { ref, reactive, watch } from 'vue'
  const testRef = ref({
    name: 'aaa'
  })
  const testReactive = reactive({
    name: 'bbb'
  })
  // 监听 ref 数据
  watch(testRef, (val) => {
    console.log('ref改变了');
  }, { deep: true})
  // // 监听 reactive 数据
  // watch(testReactive, (val) => {
  //   console.log('reactive改变了');
  // })
  // 监听多个值
  watch([testRef, testReactive],  () => {
    console.log('改变了');
  })
  
  const clickRef = () => {
    console.log('debug1')
    testRef.value.name = 'aaa1'
  }
  const clickReactive = () => {
    testReactive.name = 'bbb1'
  }
  
  </script>
  
  <style scoped>
  </style>
    