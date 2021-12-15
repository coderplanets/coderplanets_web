/*
 * ArticleDigest store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { merge } from 'ramda'

import type { TRootStore, TThread, TArticle } from '@/spec'
import { TYPE } from '@/constant'
import { markStates, toJS } from '@/utils/mobx'
import { BlogRSSInfo } from '@/model'

const ArticleDigest = T.model('ArticleDigest', {
  loading: T.optional(T.boolean, false),
  viewerHasSubscribed: T.optional(T.boolean, false),
  subscribersCount: T.optional(T.number, -1),

  action: T.optional(
    T.enumeration('action', [TYPE.FAVORITE, TYPE.STAR]),
    TYPE.FAVORITE,
  ),
  scrollDirection: T.optional(
    T.enumeration('scrollDirection', ['up', 'down']),
    'down',
  ),
  inViewport: T.optional(T.boolean, true),

  // blog-spec
  blogRssInfo: T.optional(BlogRSSInfo, {}),

  // for works or blog article
  tab: T.optional(T.string, ''),
})
  .views((self) => ({
    get isLogin(): boolean {
      const root = getParent(self) as TRootStore
      return root.account.isLogin
    },
    get viewingArticle(): TArticle {
      const root = getParent(self) as TRootStore
      const article = toJS(root.viewing.viewingArticle)
      const slf = self as TStore

      if (!slf.isLogin) {
        return toJS(article)
      }

      const { viewerHasSubscribed, subscribersCount } = self
      const originalCommunity = merge(article.originalCommunity, {
        viewerHasSubscribed,
        subscribersCount:
          subscribersCount === -1
            ? article.originalCommunity.subscribersCount
            : subscribersCount,
      })

      // @ts-ignore
      return merge(article, { originalCommunity })
    },
    get activeThread(): TThread {
      const root = getParent(self) as TRootStore

      const { activeThread } = root.viewing
      return activeThread
    },
    get starLoading(): boolean {
      const { action, loading } = self
      if (action === TYPE.STAR && loading) return true
      return false
    },
    get favoriteLoading(): boolean {
      const { action, loading } = self
      if (action === TYPE.FAVORITE && loading) return true
      return false
    },
  }))
  .actions((self) => ({
    authWarning(options): void {
      const root = getParent(self) as TRootStore
      root.authWarning(options)
    },
    setViewing(sobj): void {
      const root = getParent(self) as TRootStore
      root.setViewing(sobj)
    },
    syncArticle(item): void {
      const root = getParent(self) as TRootStore
      root.viewing.syncArticle(item)
    },
    reset(): void {
      self.tab = ''
      self.subscribersCount = -1
      self.viewerHasSubscribed = false
    },
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof ArticleDigest>
export default ArticleDigest
