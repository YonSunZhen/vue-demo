<!--
 * @Author: yongzhen.sun
 * @Date: 2022-09-22 08:47:05
 * @LastEditors: yongzhen.sun
 * @LastEditTime: 2022-10-28 17:13:30
 * @Description: file content
-->
<template>
<button @click="clickRef">ref</button> <br />
<button @click="clickReactive">reactive</button>
</template>

<script lang="ts" setup name="WatchDemo">
import { ref, defineComponent, computed, reactive, watch } from 'vue'
const testRef = ref({
  name: 'aaa'
})
const testReactive = reactive({
  name: 'bbb'
})
// 监听 ref 数据
watch(testRef, (val) => {
  console.log('ref改变了');
})
// 监听 reactive 数据
watch(testReactive, (val) => {
  console.log('reactive改变了');
})

const clickRef = () => {
  testRef.value.name = 'aaa1'
}
const clickReactive = () => {
  testReactive.name = 'bbb1'
}

</script>

<style scoped>
</style>
  