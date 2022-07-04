/*
 * CommunityDigest store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'

import type {
  TRootStore,
  TViewing,
  TRoute,
  TCommunity,
  TThread,
  TGlobalLayout,
} from '@/spec'
import { markStates, toJS } from '@/utils/mobx'

const CommunityDigest = T.model('CommunityDigest', {
  loading: T.optional(T.boolean, false),

  inViewport: T.optional(T.boolean, true),
})
  .views((self) => ({
    get isLogin(): boolean {
      const root = getParent(self) as TRootStore
      return root.account.isLogin
    },
    get curRoute(): TRoute {
      const root = getParent(self) as TRootStore
      return root.curRoute
    },
    get viewing(): TViewing {
      const root = getParent(self) as TRootStore
      return toJS(root.viewing)
    },
    get realtimeVisitors(): number {
      const root = getParent(self) as TRootStore
      return root.footer.realtimeVisitors
    },
    get curThread(): TThread {
      const root = getParent(self) as TRootStore
      return root.viewing.activeThread
    },
    get curCommunity(): TCommunity {
      const root = getParent(self) as TRootStore

      return toJS(root.viewing.community)
    },
    get globalLayout(): TGlobalLayout {
      const root = getParent(self) as TRootStore
      return root.dashboardThread.globalLayout
    },
  }))
  .actions((self) => ({
    authWarning(options): void {
      const root = getParent(self) as TRootStore
      root.authWarning(options)
    },
    markRoute(query): void {
      const root = getParent(self) as TRootStore
      root.markRoute(query)
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

export type TStore = Instance<typeof CommunityDigest>
export default CommunityDigest
