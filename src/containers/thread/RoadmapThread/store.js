/*
 * RoadmapThread store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'

import { markStates } from '@/utils/mobx'

const RoadmapThread = T.model('RoadmapThread', {})
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

export default RoadmapThread
