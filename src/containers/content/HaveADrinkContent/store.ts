/*
 * HaveADrinkContent store
 *
 */

import { types as T, Instance } from 'mobx-state-tree'

import { markStates } from '@/utils/mobx'

import type { TSettingOption } from './spec'
import { VIEW } from './constant'

const HaveADrinkContent = T.model('HaveADrinkContent', {
  // current sub-view of the drink page
  view: T.optional(
    T.enumeration('view', [
      VIEW.DEFAULT,
      VIEW.CATALOG,
      VIEW.SETTING,
      VIEW.ABOUT,
      VIEW.EDIT,
      VIEW.SHARE,
      VIEW.COMMENT,
    ]),
    VIEW.DEFAULT,
  ),
  category: T.optional(T.string, 'IT 冷知识'),

  // refresh timer
  pool: T.optional(T.array(T.string), [
    '本站开发时没有使用任何流行的「UI组件库」，所有模块都是笨办法量身定制。',
    '本站的 Upvote 默认文案是「某某」觉得很赞，但在不同的板块中也会根据内容显示为：喜欢、赞同、惊呆了、干了、有感觉、学到了、回血了、觉得很酷、吐了等等',
    '傻人有傻福，但是傻逼没有。',
    '一个人如果没有梦想，跟无忧无虑有什么区别呢？',
    '本站评论表情包中的感谢，是一个由爱心抽象出来的大螃蟹钳子，寓意「谢谢」。',
    '比你优秀的人还在努力，你努力有什么用呢 ？',
  ]),
  poolIdx: T.optional(T.number, 0),
  // setting
  fontSize: T.optional(T.enumeration(['24px', '27px']), '24px'),
  animateType: T.optional(T.enumeration(['fade', 'bounce']), 'fade'),
  // timmer
  timer: T.maybeNull(T.number),
  timerInterval: T.optional(
    T.enumeration('timerInterval', ['3s', '5s', '10s']),
    '3s',
  ),
})
  .views((self) => ({
    get curSentence(): string {
      const { pool, poolIdx } = self

      return pool[poolIdx]
    },
    get settingOptions(): TSettingOption {
      const { fontSize, animateType } = self

      return { fontSize, animateType }
    },
    get timerIntervalVal(): number {
      const { timerInterval } = self
      return {
        '3s': 3000,
        '5s': 5000,
        '10s': 10000,
      }[timerInterval]
    },
  }))
  .actions((self) => ({
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof HaveADrinkContent>
export default HaveADrinkContent
