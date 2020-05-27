/*
 * HeaderStore store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
import { merge, contains } from 'ramda'

import { ROUTE } from '@/constant'
import { markStates, buildLog, stripMobx } from '@/utils'

/* eslint-disable-next-line */
const log = buildLog('S:HeaderStore')

const HeaderStore = T.model('HeaderStore', {
  fixed: T.optional(T.boolean, false),
  preSidebarPin: T.optional(T.boolean, false),
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
    get hasNoBottomBorder() {
      const { mainPath } = self.curRoute

      return contains(mainPath, [ROUTE.COMMUNITIES, ROUTE.SPONSOR])
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
      self.root.toast('info', merge({ position: 'topCenter' }, options))
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
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default HeaderStore
