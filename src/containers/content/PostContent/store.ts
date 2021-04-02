/*
 * PostContentStore store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'

import type { TRootStore, TRoute, TArticle } from '@/spec'
import { markStates, buildLog } from '@/utils'

/* eslint-disable-next-line */
const log = buildLog('S:PostContentStore')

const PostContentStore = T.model('PostContentStore', {
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
  }))
  .actions((self) => ({
    callInformer(): void {
      const root = getParent(self) as TRootStore
      root.callInformer()
    },
    setViewing(sobj: Record<string, unknown>): void {
      const root = getParent(self) as TRootStore
      root.setViewing(sobj)
    },
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof PostContentStore>
export default PostContentStore
