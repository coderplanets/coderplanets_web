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
    get bodyScrollDirection() {
      return self.root.globalLayout.bodyScrollDirection
    },
    get showLeftSticker() {
      return self.bodyScrollDirection === 'down'
    },
  }))
  .actions((self) => ({
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default ArticleSticker
