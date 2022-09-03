/*
 * ArticleSticker store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
// import {} from 'ramda'

import type {
  TRootStore,
  TArticle,
  TScrollDirection,
  TThread,
  TCommentsState,
} from '@/spec'
import { markStates, toJS } from '@/utils/mobx'
import { PagedUsers, emptyPagi } from '@/model'

const ArticleSticker = T.model('ArticleSticker', {
  pagedCommentsParticipants: T.optional(PagedUsers, emptyPagi),
  // is TOC is opend, then lock the lefsidebar
  isLeftStickerLocked: T.optional(T.boolean, false),
})
  .views((self) => ({
    get isLogin(): boolean {
      const root = getParent(self) as TRootStore
      return root.account.isLogin
    },
    get viewingArticle(): TArticle {
      const root = getParent(self) as TRootStore
      return toJS(root.viewing.viewingArticle)
    },
    get activeThread(): TThread {
      const root = getParent(self) as TRootStore

      const { activeThread } = root.viewing
      return activeThread
    },
    get bodyScrollDirection(): TScrollDirection {
      const root = getParent(self) as TRootStore
      return root.globalLayout.bodyScrollDirection as TScrollDirection
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

    get showArticleAction(): boolean {
      // const root = getParent(self) as TRootStore
      const { isArticleInViewport, isArticleDigestInViewport } = self as TStore

      return !isArticleDigestInViewport && isArticleInViewport
    },
    // get showCommunity(): boolean {
    //   const { isArticleDigestInViewport, isArticleInViewport } = self as TStore
    //   return !isArticleDigestInViewport && isArticleInViewport
    // },
    get showCommentSticker(): boolean {
      const { isArticleInViewport } = self as TStore
      return !isArticleInViewport
    },

    get commentsState(): TCommentsState {
      const root = getParent(self) as TRootStore
      return root.comments.basicState
    },
  }))
  .actions((self) => ({
    updateUpvote(viewerHasUpvoted: boolean): void {
      const root = getParent(self) as TRootStore
      return root.viewing.updateUpvote(viewerHasUpvoted)
    },
    updateUpvoteCount(count: number): void {
      const root = getParent(self) as TRootStore
      return root.viewing.updateUpvoteCount(count)
    },
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof ArticleSticker>
export default ArticleSticker
