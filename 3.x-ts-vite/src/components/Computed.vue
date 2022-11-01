<!--
 * @Author: yongzhen.sun
 * @Date: 2022-09-22 08:47:05
 * @LastEditors: yongzhen.sun
 * @LastEditTime: 2022-11-01 14:36:48
 * @Description: file content
-->
<template>
{{test1.name}}
</template>

<script lang="ts" setup name="Computed">
import { ref, defineComponent, computed } from 'vue'
const props = defineProps({
  test: {
    type: Object,
    default: () => ({})
  }
})
const test1 = computed(() => {
  console.log('debug1')
  return props.test
})
// const test1 = ref(props.test)
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
