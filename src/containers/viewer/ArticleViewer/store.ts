/*
 * ArticleViewer store
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
// import {} from 'ramda'

import type {
  TCommunity,
  TRootStore,
  TAccount,
  TViewing,
  TThread,
} from '@/spec'
import { markStates, buildLog, stripMobx } from '@/utils'

/* eslint-disable-next-line */
const log = buildLog('S:ArticleViewer')

const ArticleViewer = T.model('ArticleViewer', {
  loading: T.optional(T.boolean, false),
  fixedHeaderVisible: T.optional(T.boolean, false),
})
  .views((self) => ({
    get isLogin(): boolean {
      const root = getParent(self) as TRootStore
      return root.account.isLogin
    },
    get accountInfo(): TAccount {
      const root = getParent(self) as TRootStore
      return root.account.accountInfo
    },
    get curCommunity(): TCommunity {
      const root = getParent(self) as TRootStore

      return stripMobx(root.viewing.community)
    },
    get activeThread(): TThread {
      const root = getParent(self) as TRootStore

      return root.viewing.activeThread
    },
    get viewingData(): TViewing {
      const root = getParent(self) as TRootStore
      return root.viewingData
    },
  }))
  .actions((self) => ({
    setViewing(sobj): void {
      const root = getParent(self) as TRootStore
      root.setViewing(sobj)
    },
    syncViewingItem(item): void {
      const root = getParent(self) as TRootStore
      root.viewing.syncViewingItem(item)
    },
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof ArticleViewer>

export default ArticleViewer
