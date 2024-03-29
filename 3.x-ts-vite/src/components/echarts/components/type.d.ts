/*
 * @Author: yongzhen.sun
 * @Date: 2023-04-05 11:10:47
 * @LastEditors: yongzhen.sun
 * @LastEditTime: 2023-04-05 23:11:18
 * @Description: file content
 */
import { ECElementEvent, SelectChangedPayload, HighlightPayload,  } from 'echarts/types/src/util/types'
import * as echarts from "echarts/core"
// TODO: echart 原生类型中是否有定义
type ChartType = 'bar' | 'line' | 'pie' | 'gauge'

export namespace ChartsEvents {
  // 鼠标事件类型
  type MouseEventType = 'click' | 'dblclick' | 'mousedown' | 'mousemove' | 'mouseup' | 'mouseover' | 'mouseout' | 'globalout' | 'contextmenu' // 鼠标事件类型

  // type XX = Exclude<MouseEventType,'globalout'|'contextmenu'>


  type MouseEvents = {
    [key in Exclude<MouseEventType,'globalout'|'contextmenu'>] :ECElementEvent
  }

  // 其他的事件类型极参数
  interface Events extends MouseEvents {
    globalout:ECElementEvent,
    contextmenu:ECElementEvent,
    selectchanged: SelectChangedPayload;
    highlight: HighlightPayload;
    legendselected: { // 图例选中后的事件
      type: 'legendselected',
      // 选中的图例名称
      name: string
      // 所有图例的选中状态表
      selected: {
        [name: string]: boolean
      }
    };
    // ... 其他类型的事件在这里定义
  }


  // echarts所有的事件类型
  type EventType = keyof Events
  // interface EventEmitsType {
  //   <T extends EventType>(
  //     e: `on${T}`,
  //     event: Events[Uncapitalize<T>]
  //   ): void;
  // }
}

import {
  // 系列类型的定义后缀都为 SeriesOption
  BarSeriesOption,
  LineSeriesOption,
  PieSeriesOption,
  FunnelSeriesOption,
  GaugeSeriesOption,
} from 'echarts/charts';


import { XAXisComponentOption, YAXisComponentOption } from 'echarts';

import {
  TitleComponentOption,
  TooltipComponentOption,
  GridComponentOption,
  DatasetComponentOption,
  AriaComponentOption,
  AxisPointerComponentOption,
  LegendComponentOption,
} from 'echarts/components'; // 组件


type BaseOptionType = XAXisComponentOption | YAXisComponentOption | TitleComponentOption | TooltipComponentOption | LegendComponentOption | GridComponentOption

// 基本配置的类型定义
type BaseOption = echarts.ComposeOption<BaseOptionType>

// 所有配置的类型定义
type EChartsOptions = echarts.EChartsCoreOption & BaseOption



// TODO: 先重复定义 后续优化
export interface Props {
  options?: EChartsOptions
}

export {
  ChartType,
  BaseOption,
  EChartsOptions
}