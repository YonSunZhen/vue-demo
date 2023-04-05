<!--
 * @Author: yongzhen.sun
 * @Date: 2023-04-05 11:03:02
 * @LastEditors: yongzhen.sun
 * @LastEditTime: 2023-04-05 18:30:24
 * @Description: file content
-->
<script lang="tsx" setup name="EchartDemo">
import { useBarChart } from './components'
import Charts from './components/Charts.vue'

const { BarChartRender } = useBarChart()

const click = (data) => {
  console.log('debug111',data)
}


</script>
<template>
  <div style="height: 50vh;">
    <BarChartRender :type="'bar'" @dblclick="click"></BarChartRender>
    <!-- <Charts @click="click"></Charts> -->
  </div>
</template>
  

  
<style scoped>
</style>