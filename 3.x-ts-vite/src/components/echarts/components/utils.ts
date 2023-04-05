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