/*
 * HeaderStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:HeaderStore')
/* eslint-enable no-unused-vars */

const HeaderStore = t
  .model('HeaderStore', {
    fixed: t.optional(t.boolean, false),
    preSidebarPin: t.optional(t.boolean, false),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get curRoute() {
      return self.root.curRoute
    },
    get accountInfo() {
      return self.root.accountInfo
    },
    get curCommunity() {
      return self.root.communities.curCommunity
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
  .actions(self => ({
    setFix(fixed = false) {
      self.preSidebarPin = self.root.sidebar.pin
      self.fixed = fixed
    },
    updateAccount(sobj) {
      self.root.account.updateAccount(sobj)
    },
    openDoraemon() {
      self.root.openDoraemon()
    },
    openPreview(type) {
      self.root.openPreview(type)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default HeaderStore
