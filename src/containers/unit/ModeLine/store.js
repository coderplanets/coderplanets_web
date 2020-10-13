/*
 * ModeLine store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
// import {} from 'ramda'

import { markStates, buildLog, stripMobx } from '@/utils'
/* eslint-disable-next-line */
const log = buildLog('S:ModeLine')

const ModeLine = T.model('ModeLine', {
  showTop: T.optional(T.boolean, false),
})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
    get viewing() {
      return stripMobx(self.root.viewing)
    },
    get leftOffset() {
      const curSidebarPin = self.root.sidebar.pin
      if (
        (!curSidebarPin && !self.preSidebarPin && !self.fixed) ||
        (!curSidebarPin && !self.preSidebarPin) ||
        (curSidebarPin && !self.preSidebarPin && !self.fixed) ||
        (curSidebarPin && self.preSidebarPin && self.fixed) ||
        (curSidebarPin && self.preSidebarPin && !self.fixed) ||
        (!curSidebarPin && self.preSidebarPin && !self.fixed)
      ) {
        return 0
      }

      // 特殊情况： 当 sidebar 打开时下滑页面， 需要一个 preSidebarPin 的中间状态
      if (!curSidebarPin && self.preSidebarPin && self.fixed) {
        return '-180px'
      }

      // isPin && !self.preSidebarPin && self.fixed
      return '180px'
    },
  }))
  .actions((self) => ({
    showTopBar(bool) {
      self.showTop = bool
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default ModeLine
