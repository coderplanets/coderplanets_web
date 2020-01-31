/*
 * HaveADrinkContent store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, buildLog } from '@utils'

import { LN } from './logic'

const { VIEW } = LN
/* eslint-disable-next-line */
const log = buildLog('S:HaveADrinkContent')

const HaveADrinkContent = t
  .model('HaveADrinkContent', {
    // current sub-view of the drink page
    view: t.optional(
      t.enumeration('view', [
        VIEW.DEFAULT,
        VIEW.CATALOG,
        VIEW.SETTING,
        VIEW.EDIT,
        VIEW.SHARE,
        VIEW.COMMENT,
      ]),
      VIEW.DEFAULT
    ),
    // refresh timer
    pool: t.optional(t.array(t.string), [
      '看见一个算命大师，我刚坐下他就问我，你算什么东西？',
      '傻人有傻福，但是傻逼没有。',
      '一个人如果没有梦想，跟无忧无虑有什么区别呢？',
      '好看的皮囊千篇一律，有趣的灵魂两百多斤',
      '比你优秀的人还在努力，你努力有什么用呢 ？',
    ]),
    poolIdx: t.optional(t.number, 0),

    timer: t.maybeNull(t.number),
    timerInterval: t.optional(
      t.enumeration('timerInterval', ['3s', '5s', '10s']),
      '3s'
    ),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get curSentence() {
      const { pool, poolIdx } = self

      return pool[poolIdx]
    },
    get timerIntervalVal() {
      const { timerInterval } = self
      return {
        '3s': 3000,
        '5s': 5000,
        '10s': 10000,
      }[timerInterval]
    },
  }))
  .actions(self => ({
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default HaveADrinkContent
