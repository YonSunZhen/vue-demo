/*
 * @Author: yongzhen.sun
 * @Date: 2023-04-05 11:13:13
 * @LastEditors: yongzhen.sun
 * @LastEditTime: 2023-04-05 22:40:57
 * @Description: file content
 */
import Charts from '../Charts.vue'
import { Props, BaseOption } from '../type'
import { mergeOptions } from '../utils'
import { commonOptions } from '../constant'

export const useBarChart = (options: any) => {
  const barChartOption: BaseOption = {
    legend: {
      data: ['销量牛逼']
    },
  };
  // TODO: 函数式组件添加事件类型提示 -- hook 只负责处理数据，不返回实际组件文件
  const BarChartRender = (props: Props) => {
    const _options = mergeOptions([commonOptions, barChartOption, options, props.options as any])
    console.log('debug1', _options)
    return (
      <Charts {...props} options={_options}></Charts>
    )
  }
  return {
    BarChartRender
  }
}

// 目标：符合政企相关特定业务场景的公共图表组件 -- 简化一些通用配置
// 不产生额外的心智负担，与原生的配置保持高度一致

// 对一些共性的配置可以统一配置，或者说是适配特定业务场景的一些配置
// 如何实现？可以基于此公共组件做一些通用配置（基于此组件 -- 创建一个新的私有组件 -- 接着配置
// 机制：在 main 入口文件中注册组件时传入配置数据、或者新建私有组件时传入配置数据）
// 也可以由外部自由配置（外部传进来的会覆盖内部的）

// 简化一些通用的配置，比如说 render啥的, 界面缩放啥的
// 对原生的一些功能进行扩展，二次封装
// 数据配置更加人性化??? 是否对data进行封装???


// 深度监听传入的options，变化时更新覆盖默认配置，更新图表 -- 是否在 vue 文件组件中处理 ???
// 提供事件支持，支持echart事件按需绑定交互
// 注意要确保所有传入图表组件的options数组都是shallowReactive类型，避免数组量过大，深度响应式导致性能问题

// Charts.vue 文件负责 --图表渲染、事件处理
// Charts.vue 对配置不做多余的限制
// 处理数据放在 每个单独的 hook 中，针对不同类型的图表进行数据处理