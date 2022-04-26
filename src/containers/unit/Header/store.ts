/*
 * HeaderStore store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { merge, contains, values } from 'ramda'

import type { TRootStore, TCommunity, TAccount } from '@/spec'
import { METRIC } from '@/constant'
import { markStates, toJS } from '@/utils/mobx'

const HeaderStore = T.model('HeaderStore', {
  metric: T.optional(T.enumeration(values(METRIC)), METRIC.COMMUNITY),
})
  .views((self) => ({
    get isOnline(): boolean {
      const root = getParent(self) as TRootStore
      return root.isOnline
    },
    get curCommunity(): TCommunity {
      const root = getParent(self) as TRootStore
      return toJS(root.viewing.community)
    },
    get accountInfo(): TAccount {
      const root = getParent(self) as TRootStore
      return root.account.accountInfo
    },
    get isLogin(): boolean {
      const root = getParent(self) as TRootStore
      return root.account.isLogin
    },
    get hasNoBottomBorder(): boolean {
      return contains(self.metric, [
        METRIC.EXPLORE,
        METRIC.SPONSOR,
        METRIC.SUPPORT_US,
        METRIC.SUBSCRIBE,
        METRIC.ARTICLE,
        METRIC.MEMBERSHIP,
        METRIC.USER,
        METRIC.COMMUNITY_EDITOR,
        METRIC.HELP_CENTER,
      ])
    },
    get leftOffset(): string {
      // const root = getParent(self) as TRootStore
      // const curSidebarPin = root.sidebar.pin

      // if (
      //   (!curSidebarPin && !self.preSidebarPin && !self.fixed) ||
      //   (!curSidebarPin && !self.preSidebarPin) ||
      //   (curSidebarPin && !self.preSidebarPin && !self.fixed) ||
      //   (curSidebarPin && self.preSidebarPin && self.fixed) ||
      //   (curSidebarPin && self.preSidebarPin && !self.fixed) ||
      //   (!curSidebarPin && self.preSidebarPin && !self.fixed)
      // ) {
      //   return 0
      // }

      // 特殊情况： 当 sidebar 打开时下滑页面， 需要一个 preSidebarPin 的中间状态
      // if (!curSidebarPin && self.preSidebarPin && self.fixed) {
      // if (!curSidebarPin) {
      //   return '-180px'
      // }

      // isPin && !self.preSidebarPin && self.fixed
      // return '180px'
      return '0'
    },
  }))
  .actions((self) => ({
    logout(): void {
      const root = getParent(self) as TRootStore
      root.account.logout()
    },
    updateSession(state): void {
      const root = getParent(self) as TRootStore
      root.account.updateSession(state)
    },
    toastInfo(options): void {
      const root = getParent(self) as TRootStore
      root.toast('info', merge({ position: 'topCenter' }, options))
    },
    markRoute(query): void {
      const root = getParent(self) as TRootStore
      root.markRoute(query)
    },
    handleLogin(): void {
      const root = getParent(self) as TRootStore
      root.doraemon.handleLogin()
    },
    openDoraemon(): void {
      const root = getParent(self) as TRootStore
      root.openDoraemon()
    },
    setViewing(sobj): void {
      const root = getParent(self) as TRootStore
      root.setViewing(sobj)
    },
    toast(type, options): void {
      const root = getParent(self) as TRootStore
      root.toast(type, options)
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof HeaderStore>

export default HeaderStore
