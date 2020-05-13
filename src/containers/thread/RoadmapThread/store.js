/*
 * RoadmapThread store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, buildLog } from '@/utils'
/* eslint-disable-next-line */
const log = buildLog('S:RoadmapThread')

const RoadmapThread = t
  .model('RoadmapThread', {})
  .views(self => ({
    get root() {
      return getParent(self)
    },
  }))
  .actions(self => ({
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default RoadmapThread
