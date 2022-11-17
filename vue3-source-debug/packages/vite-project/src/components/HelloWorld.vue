<!--
 * @Author: yongzhen.sun
 * @Date: 2022-11-16 09:19:40
 * @LastEditors: yongzhen.sun
 * @LastEditTime: 2022-11-17 16:57:32
 * @Description: file content
-->
<script setup lang="ts">
import { ref, reactive, watch, computed, nextTick } from 'vue'
const testRef = ref({
  name: 'aaa',
  detail: {
    age: 18
  }
})
// watch(testRef.value, (val, old) => {
//   console.log('ref改变了, new', val);
//   console.log('ref改变了, old', old);
// }, { deep: true })
debugger
watch(() => testRef.value.detail.age, (val, old) => {
  testRef.value.detail.age++
  console.log('ref改变了 new', val);
  console.log('ref改变了 old', old);
})
// debugger
// watch(testRef.value.detail, (val, old) => {
//   // debugger
//   console.log('ref改变了 new', val);
//   console.log('ref改变了 old', old);
// })
// const clickRef = () => {
//   testRef.value.detail.age = 2
// }

// const testReactive = reactive({
//   name: 'bbb',
//   detail: {
//     age: 18
//   }
// })
// watch(testReactive, (val, old) => {
//   console.log('reactive改变了 new', val);
//   console.log('reactive改变了 old', old);
// }, { deep: true })



// const testComputed = computed(() => testReactive.name)
// // debugger
// // 监听 computed 数据
// watch(testComputed, (val, old) => {
//   // debugger
//   console.log('reactive改变了');
// })

const clickRef = () => {
  testRef.value.detail.age = 1
  // nextTick(() => {
  //   testRef.value.detail.age = 5
  // })
}
const clickReactive = () => {
  testReactive.name = 'bbb1'
}

</script>

<template>
  <button @click="clickRef">ref</button>
  <!-- <button @click="clickReactive">reactive</button> -->
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
