<!--
 * @Author: yongzhen.sun
 * @Date: 2022-09-22 08:47:05
 * @LastEditors: yongzhen.sun
 * @LastEditTime: 2022-12-27 11:39:38
 * @Description: file content
-->
<template>
  <button @click="clickRef">ref11</button>
  <button @click="clickReactive">reactive11</button>
  </template>
  
<script lang="ts" setup name="WatchDemo">
import { ref, reactive, watch } from 'vue'
const testRef = ref({
  refName: true
})
const testReactive = reactive({
  reactiveName: true
})
// 监听 ref 数据
// 用任何方式生成的数据，如果接收的变量是一个proxy代理对象，就都会导致watch这个对象时,watch回调里无法正确获取旧值
// 官方文档：在深层级模式时，如果回调函数由于深层级的变更而被触发，那么新值和旧值将是同一个对象。
// https://juejin.cn/post/7045070532005330975
// 监听一个getter，getter返回一个深拷贝的数据即可
// watch(() => JSON.parse(JSON.stringify(testRef.value)), (val, _val) => {
//   console.log('val',val)
//   console.log('_val',_val)
//   console.log('ref改变了');
// }, { deep: true})
// 监听 reactive 数据
// watch(testReactive, (val, _val) => {
//   console.log('val',val)
//   console.log('_val',_val)
//   console.log('reactive改变了');
// })
// // 监听多个值
watch([testRef.value, () => JSON.parse(JSON.stringify(testReactive))],  ([val1, val2], [_val1, _val2]) => {
  console.log('val1',val1)
  // console.log('val2',val2)
  // console.log('_val1',_val1)
  // console.log('_val2',_val2)
  console.log('改变了');
})

const clickRef = () => {
  console.log('debug1')
  testRef.value.refName = !testRef.value.refName
}
const clickReactive = () => {
  console.log('debug2')
  testReactive.reactiveName = !testReactive.reactiveName
}

</script>

<style scoped>
</style>
    