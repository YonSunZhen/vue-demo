import { BarChart, LineChart, PieChart, GaugeChart } from "echarts/charts";
import {
  TitleComponent,
  LegendComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent
} from "echarts/components";
import { LabelLayout, UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import * as echarts from "echarts/core"
import { BaseOption } from './type'

export const useEchartsModule = () => {
  echarts.use([
    BarChart,
    LineChart,
    BarChart,
    PieChart,
    GaugeChart,
    TitleComponent,
    LegendComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer
  ]);
}

// 将多项配置进行合并 后面的会覆盖前面的
export function mergeOptions(optionsArr: BaseOption[]) {
  let res = {}
  optionsArr.forEach(item => {
    res = Object.assign(res, item)
  })
  return res
}