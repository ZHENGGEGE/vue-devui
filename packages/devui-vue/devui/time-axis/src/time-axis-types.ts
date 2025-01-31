import type { PropType, ExtractPropTypes,SetupContext } from 'vue'
export type DataDirection = 'vertical' | 'horizontal'
export type Mode = 'normal' | 'alternative'
export type TimePosition = 'left' | 'bottom'
export type LineStyle = 'solid' | 'dashed' | 'dotted' | 'none'

export const timeAxisProps = {
  //设置时间轴方向
  direction: {
    type: String as PropType<DataDirection>,
    default: 'vertical'
  },
  //设置居中
  center: {
    type: Boolean,
    default: false
  },
  //设置排序方向
  mode: {
    type: String as PropType<Mode>,
    default: 'normal'
  },
  //设置时间位置
  timePosition: {
    type: String as PropType<TimePosition>,
    default: 'left'
  }
} as const

export type TimeAxisProps = ExtractPropTypes<typeof timeAxisProps>

export interface TimeAxisRootType {
  ctx: SetupContext<any>
  props: TimeAxisProps
}
