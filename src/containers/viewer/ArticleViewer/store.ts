/*
 * ArticleViewer store
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
// import {} from 'ramda'

import { THREAD } from '@/constant'
import type {
  TCommunity,
  TRootStore,
  TAccount,
  TArticle,
  TArticleMeta,
  TThread,
} from '@/spec'
import { markStates, toJS } from '@/utils/mobx'
import { buildLog } from '@/utils/logger'

/* eslint-disable-next-line */
const log = buildLog('S:ArticleViewer')

const ArticleViewer = T.model('ArticleViewer', {
  loading: T.optional(T.boolean, false),
  tab: T.optional(T.string, ''),
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

      return toJS(root.viewing.community)
    },
    get activeThread(): TThread {
      const root = getParent(self) as TRootStore

      return root.viewing.activeThread
    },
    get viewingArticle(): TArticle {
      const root = getParent(self) as TRootStore
      return toJS(root.viewing.viewingArticle)
    },
  }))
  .actions((self) => ({
    setViewing(sobj): void {
      const root = getParent(self) as TRootStore
      root.setViewing(sobj)
    },
    syncArticle(item): void {
      const root = getParent(self) as TRootStore
      if (self.activeThread === THREAD.WORKS) {
        console.log('TODO: syncArticle for WORKS ')
        return
      }
      root.articlesThread.updateArticle(item)
    },
    updateUpvote(viewerHasUpvoted: boolean): void {
      const root = getParent(self) as TRootStore
      return root.viewing.updateUpvote(viewerHasUpvoted)
    },
    updateUpvoteCount(count: number, meta: TArticleMeta): void {
      const root = getParent(self) as TRootStore
      return root.viewing.updateUpvoteCount(count, meta)
    },
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof ArticleViewer>

export default ArticleViewer
