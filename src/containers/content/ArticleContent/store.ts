/*
 * ArticleContent store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { isEmpty } from 'ramda'

import type { TRootStore, TRoute, TArticle, TBlogRSS } from '@/spec'

import uid from '@/utils/uid'
import { markStates, toJS } from '@/utils/mobx'
import { buildLog } from '@/utils/logger'

/* eslint-disable-next-line */
const log = buildLog('S:ArticleContentStore')

const ArticleContent = T.model('ArticleContent', {
  articleInViewport: T.optional(T.boolean, true),
})
  .views((self) => ({
    get curRoute(): TRoute {
      const root = getParent(self) as TRootStore
      return root.curRoute
    },
    get isLogin(): boolean {
      const root = getParent(self) as TRootStore
      return root.account.isLogin
    },
    get viewingArticle(): TArticle {
      const root = getParent(self) as TRootStore
      return root.viewingArticle
    },
    get articleTab(): string {
      const root = getParent(self) as TRootStore
      return root.articleDigest.tab
    },
    get blogRssInfoData(): TBlogRSS {
      const root = getParent(self) as TRootStore
      const rssInfoRaw = toJS(root.articleDigest.blogRssInfo)
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
    setViewing(sobj: Record<string, unknown>): void {
      const root = getParent(self) as TRootStore
      root.setViewing(sobj)
    },
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof ArticleContent>
export default ArticleContent
