/*
 * ArticleViewer store
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { isEmpty } from 'ramda'

import { THREAD } from '@/constant'
import type {
  TCommunity,
  TRootStore,
  TAccount,
  TArticle,
  TArticleMeta,
  TThread,
  TBlogRSS,
  TDocument,
} from '@/spec'

import uid from '@/utils/uid'
import { markStates, toJS } from '@/utils/mobx'
import { buildLog } from '@/utils/logger'
import { BlogRSSInfo, Document } from '@/model'

/* eslint-disable-next-line */
const log = buildLog('S:ArticleViewer')

const ArticleViewer = T.model('ArticleViewer', {
  loading: T.optional(T.boolean, false),
  tab: T.optional(T.string, ''),
  // blog-spec
  blogRssInfo: T.optional(BlogRSSInfo, {}),
  document: T.optional(Document, {}),
})
  .views((self) => ({
    get isLogin(): boolean {
      const root = getParent(self) as TRootStore
      return root.account.isLogin
    },
    get documentData(): TDocument {
      return toJS(self.document)
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
    get blogRssInfoData(): TBlogRSS {
      const slf = self as TStore
      const rssInfoRaw = toJS(slf.blogRssInfo)
      if (!isEmpty(rssInfoRaw.historyFeed)) {
        rssInfoRaw.historyFeed = rssInfoRaw.historyFeed.map((item) => ({
          ...item,
          id: uid.gen(),
        }))
      }

      return rssInfoRaw
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
    reset(): void {
      self.tab = ''
    },
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof ArticleViewer>

export default ArticleViewer
