<!--
 * @Author: yongzhen.sun
 * @Date: 2023-04-05 11:03:02
 * @LastEditors: yongzhen.sun
 * @LastEditTime: 2023-04-05 18:34:45
 * @Description: file content
-->
<script lang="tsx" setup name="Charts">
import * as echarts from "echarts/core"
import { ShallowRef } from 'vue'
import { ChartsEvents, ChartType } from "./type";
import { useEchartsModule } from './utils'


export interface Props {
  type?: ChartType,
  options?: echarts.EChartsCoreOption
}

interface EventEmitsType {
  <T extends ChartsEvents.EventType>(e: `${T}`, event: ChartsEvents.Events[T]): void;
}
// 定义事件 -- 类型提示
defineEmits<EventEmitsType>();

const props = withDefaults(defineProps<Props>(), {
  type: 'bar',
  options: () => ({} as echarts.EChartsCoreOption)
})

const { type, options } = toRefs(props);

const useCharts = (el: ShallowRef<HTMLElement>) => {
  useEchartsModule() 
  const charts = shallowRef<echarts.ECharts>();
  const initChart = async () => {
    charts.value = echarts.init(el.value);
    // options = await getOptions();
    const option = {
      title: {
        text: 'ECharts 入门示例'
      },
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
    charts.value.setOption(option);
    // chartsResize.add(charts.value); // 将图表实例添加到缓存中
    initEvent();
  };

  const attrs = useAttrs();
  const initEvent = () => {
    Object.keys(attrs).forEach(attrKey => {
      if (/^on/.test(attrKey)) {
        const cb = attrs[attrKey];
        attrKey = attrKey.replace(/^on(Chart)?/, "");
        attrKey = `${attrKey[0]}${attrKey.substring(1)}`;
        typeof cb === "function" && charts.value?.on(attrKey, cb as () => void);
      }
    });
  };

  const setOptions = (opt: echarts.EChartsCoreOption) => {
    if(charts.value) {
      charts.value.setOption(opt)
    }
  };
  return {
    initChart, 
    charts,
    setOptions
  }
}
const chartRef = shallowRef();
const { charts, setOptions, initChart } = useCharts(chartRef);

onMounted(async () => {
  await initChart();
  setOptions(options.value);
});
watch(
  options,
  () => {
    setOptions(options.value);
  },
  {
    deep: true
  }
);

defineExpose({
  $charts: charts
});


</script>
<template>
  <div class="charts" ref="chartRef" />
</template>
  

  
<style scoped>

.charts {
  width: 100%;
  height: 100%;
  min-height: 200px;
}
</style>