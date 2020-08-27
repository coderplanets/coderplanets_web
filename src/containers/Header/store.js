/*
 * HeaderStore store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
import { merge } from 'ramda'

import { C11N } from '@/constant'
import { markStates, buildLog, stripMobx } from '@/utils'

/* eslint-disable-next-line */
const log = buildLog('S:HeaderStore')

const HeaderStore = T.model('HeaderStore', {
  fixed: T.optional(T.boolean, false),
  preSidebarPin: T.optional(T.boolean, false),
  layout: T.optional(
    T.enumeration('layout', [C11N.DIGEST, C11N.DIGEST_ROW]),
    C11N.DIGEST_ROW,
  ),
})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
    get isOnline() {
      return self.root.isOnline
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
  .actions((self) => ({
    logout() {
      self.root.account.logout()
    },
    updateSession(state) {
      self.root.account.updateSession(state)
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
    upgradeHelper() {
      self.root.upgradeHelper()
    },
    toast(type, options) {
      self.root.toast(type, options)
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default HeaderStore
