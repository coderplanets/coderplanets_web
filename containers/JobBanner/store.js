/*
 * JobBanner store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger, stripMobx } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:JobBanner')
/* eslint-enable no-unused-vars */

const JobBanner = t
  .model('JobBanner', {})
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get curRoute() {
      return self.root.curRoute
    },
    get viewingJobData() {
      return stripMobx(self.root.viewing.job)
    },
  }))
  .actions(self => ({
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default JobBanner
