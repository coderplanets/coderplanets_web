/*
 * ThreadSidebar store
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
// import {} from 'ramda'

import type { TAccount, TC11N, TCommunity, TThread, TRootStore } from '@/spec'
import { markStates, toJS } from '@/utils/mobx'
import { buildLog } from '@/utils/logger'

/* eslint-disable-next-line */
const log = buildLog('S:ThreadSidebar')

const ThreadSidebar = T.model('ThreadSidebar', {})
  .views((self) => ({
    get accountInfo(): TAccount {
      const root = getParent(self) as TRootStore
      return root.accountInfo
    },
    get isLogin(): boolean {
      const root = getParent(self) as TRootStore
      return root.account.isLogin
    },
    get c11n(): TC11N {
      const root = getParent(self) as TRootStore
      return root.account.c11n
    },
    get curCommunity(): TCommunity {
      const root = getParent(self) as TRootStore

      return toJS(root.viewing.community)
    },

    get curThread(): TThread {
      const root = getParent(self) as TRootStore
      return root.viewing.activeThread
    },

    get isCommunityDigestInViewport(): boolean {
      const root = getParent(self) as TRootStore
      return root.communityDigest.inViewport
    },

    get realtimeVisitors(): number {
      const root = getParent(self) as TRootStore
      return root.footer.realtimeVisitors
    },
  }))
  .actions((self) => ({
    authWarning(options = {}): void {
      const root = getParent(self) as TRootStore
      root.authWarning(options)
    },
    setViewing(sobj): void {
      const root = getParent(self) as TRootStore
      root.setViewing(sobj)
    },
    addSubscribedCommunity(community: TCommunity): void {
      const root = getParent(self) as TRootStore
      root.account.addSubscribedCommunity(community)
    },
    removeSubscribedCommunity(community: TCommunity): void {
      const root = getParent(self) as TRootStore
      root.account.removeSubscribedCommunity(community)
    },
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof ThreadSidebar>

export default ThreadSidebar
