/*
 * HeaderStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { markStates, makeDebugger, stripMobx } from '@utils'
/* eslint-disable-next-line */
const debug = makeDebugger('S:HeaderStore')

const HeaderStore = t
  .model('HeaderStore', {
    fixed: t.optional(t.boolean, false),
    preSidebarPin: t.optional(t.boolean, false),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get isOnline() {
      return self.root.isOnline
    },
    get curRoute() {
      return self.root.curRoute
    },
    get activeInfo() {
      return stripMobx(self.root.viewing)
    },
    get curCommunity() {
      return stripMobx(self.root.viewing.community)
    },
    get accountInfo() {
      return self.root.account.accountInfo
    },
    get isLogin() {
      return self.root.account.isLogin
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
    logout() {
      self.root.account.logout()
    },
    updateSesstion(state) {
      self.root.account.updateSesstion(state)
    },
    toastInfo(options) {
      self.root.toast('info', R.merge({ position: 'topCenter' }, options))
    },
    setFix(fixed = false) {
      self.preSidebarPin = self.root.sidebar.pin
      self.fixed = fixed
    },
    markRoute(query) {
      self.root.markRoute(query)
    },
    handleLogin() {
      self.root.doraemon.handleLogin()
    },
    openDoraemon() {
      self.root.openDoraemon()
    },
    setViewing(sobj) {
      self.root.setViewing(sobj)
    },
    upgradeHepler() {
      self.root.upgradeHepler()
    },
    toast(type, options) {
      self.root.toast(type, options)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default HeaderStore
