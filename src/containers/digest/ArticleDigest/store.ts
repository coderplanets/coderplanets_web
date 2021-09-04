/*
 * ArticleDigest store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'

import type { TRootStore, TThread, TArticle } from '@/spec'
import { TYPE } from '@/constant'
import { markStates, toJS } from '@/utils/mobx'

const ArticleDigest = T.model('ArticleDigest', {
  loading: T.optional(T.boolean, false),
  action: T.optional(
    T.enumeration('action', [TYPE.FAVORITE, TYPE.STAR]),
    TYPE.FAVORITE,
  ),
  scrollDirection: T.optional(
    T.enumeration('scrollDirection', ['up', 'down']),
    'down',
  ),
  inViewport: T.optional(T.boolean, true),
})
  .views((self) => ({
    get isLogin(): boolean {
      const root = getParent(self) as TRootStore
      return root.account.isLogin
    },
    get viewingArticle(): TArticle {
      const root = getParent(self) as TRootStore
      return toJS(root.viewingArticle)
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
    syncViewingItem(item): void {
      const root = getParent(self) as TRootStore
      root.viewing.syncViewingItem(item)
    },
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof ArticleDigest>
export default ArticleDigest
