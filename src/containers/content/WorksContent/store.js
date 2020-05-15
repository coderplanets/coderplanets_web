/*
 * WorksContent store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, buildLog } from '@/utils'
/* eslint-disable-next-line */
const log = buildLog('S:WorksContent')

const WorksContent = T.model('WorksContent', {
  activeView: T.optional(T.enumeration(['works', 'milestone']), 'works'),
})
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

export default WorksContent
