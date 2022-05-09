/*
 * ArticleFooter store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
// import {} from 'ramda'

import type { TArticle, TRootStore } from '@/spec'
import { markStates } from '@/utils/mobx'

const ArticleFooter = T.model('ArticleFooter', {
  hasFollowedAuthor: T.optional(T.boolean, false),
  actionPanelType: T.optional(
    T.enumeration(['reference-list', 'operation-list']),
    'operation-list',
  ),
})
  .views((self) => ({
    get isLogin(): boolean {
      const root = getParent(self) as TRootStore
      return root.account.isLogin
    },
    get viewingArticle(): TArticle {
      const root = getParent(self) as TRootStore
      return root.viewingArticle
    },
  }))
  .actions((self) => ({
    reset(): void {
      self.hasFollowedAuthor = false
    },
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof ArticleFooter>
export default ArticleFooter
