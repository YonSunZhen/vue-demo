<!--
 * @Author: yongzhen.sun
 * @Date: 2022-09-22 08:47:05
 * @LastEditors: yongzhen.sun
 * @LastEditTime: 2022-12-27 11:10:07
 * @Description: file content
-->
<template>
<button @click="click">click</button>
</template>

<script lang="ts" setup name="Rxjs">
import { ref, reactive, watch } from 'vue'
import { useSubscription } from '@vueuse/rxjs'
import { interval } from 'rxjs'

const count = ref(0)
const click = () => {

}

useSubscription(
  interval(1000)
    .subscribe(() => {
      count.value++
      console.log(count)
    }),
)

</script>

<style scoped>
</style>
    