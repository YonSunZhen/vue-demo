<!--
 * @Author: yongzhen.sun
 * @Date: 2023-04-05 11:03:02
 * @LastEditors: yongzhen.sun
 * @LastEditTime: 2023-04-05 23:12:00
 * @Description: file content
-->
<script lang="tsx" setup name="EchartDemo">
import { useBarChart } from './components'
import Charts from './components/Charts.vue'

const option: any = {
    tooltip: {},
    legend: {
      data: ['销量']
    },
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  };

const { BarChartRender } = useBarChart(option)

const click = (data) => {
  console.log('debug111',data)
}


</script>
<template>
  <div style="height: 50vh;">
    <BarChartRender @dblclick="click"></BarChartRender>
    <!-- <Charts :options=""></Charts> -->
  </div>
</template>
  

  
<style scoped>
</style>