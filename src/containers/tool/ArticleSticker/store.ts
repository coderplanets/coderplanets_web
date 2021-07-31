/*
 * ArticleSticker store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
// import {} from 'ramda'

import type { TRootStore, TViewing, TScrollDirection, TThread } from '@/spec'
import { markStates } from '@/utils/mobx'

const ArticleSticker = T.model('ArticleSticker', {
  isTocMenuOpened: T.optional(T.boolean, false),
  // is TOC is opend, then lock the lefsidebar
  isLeftStickerLocked: T.optional(T.boolean, false),
})
  .views((self) => ({
    get viewingData(): TViewing {
      const root = getParent(self) as TRootStore
      return root.viewingData
    },
    get activeThread(): TThread {
      const root = getParent(self) as TRootStore

      const { activeThread } = root.viewing
      return activeThread
    },
    get bodyScrollDirection(): TScrollDirection {
      const root = getParent(self) as TRootStore
      return root.globalLayout.bodyScrollDirection
    },
    get isArticleDigestInViewport(): boolean {
      const root = getParent(self) as TRootStore
      return root.articleDigest.inViewport
    },
    get isArticleInViewport(): boolean {
      const root = getParent(self) as TRootStore
      const { articleInViewport } = root.articleContent

      return articleInViewport
    },
    get showLeftSticker(): boolean {
      const {
        isArticleDigestInViewport,
        isLeftStickerLocked,
        bodyScrollDirection,
      } = self as TStore

      if (isArticleDigestInViewport) return false
      if (isLeftStickerLocked) return true

      return bodyScrollDirection === 'down'
    },
    // get showCommunity(): boolean {
    //   const { isArticleDigestInViewport, isArticleInViewport } = self as TStore
    //   return !isArticleDigestInViewport && isArticleInViewport
    // },
    get showCommentSticker(): boolean {
      const { isArticleInViewport } = self as TStore
      return !isArticleInViewport
    },
  }))
  .actions((self) => ({
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof ArticleSticker>
export default ArticleSticker
