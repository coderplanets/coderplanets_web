/*
 * TrendingContent store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'

import { markStates } from '@/utils/mobx'

const TrendingContent = T.model('TrendingContent', {})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
  }))
  .actions((self) => ({
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default TrendingContent
