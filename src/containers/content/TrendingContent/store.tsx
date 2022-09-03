/*
 * TrendingContent store
 *
 */

import { types as T, Instance } from 'mobx-state-tree'

import { markStates } from '@/utils/mobx'

const TrendingContent = T.model('TrendingContent', {})
  // .views((self) => ({}))
  .actions((self) => ({
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof TrendingContent>
export default TrendingContent
