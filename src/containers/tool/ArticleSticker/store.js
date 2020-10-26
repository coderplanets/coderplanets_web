/*
 * ArticleSticker store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
// import {} from 'ramda'

import { markStates, buildLog } from '@/utils'
/* eslint-disable-next-line */
const log = buildLog('S:ArticleSticker')

const ArticleSticker = T.model('ArticleSticker', {})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
    get viewingData() {
      return self.root.viewingData
    },
    get bodyScrollDirection() {
      return self.root.globalLayout.bodyScrollDirection
    },
    get isArticleDigestInViewport() {
      return self.root.articleDigest.inViewport
    },
    get showLeftSticker() {
      if (self.isArticleDigestInViewport) return false

      return self.bodyScrollDirection === 'down'
    },
    get showCommunity() {
      return !self.isArticleDigestInViewport
    },
  }))
  .actions((self) => ({
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default ArticleSticker
