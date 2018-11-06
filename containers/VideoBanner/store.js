/*
 * VideoBanner store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger, stripMobx } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:VideoBanner')
/* eslint-enable no-unused-vars */

const VideoBanner = t
  .model('VideoBanner', {})
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get curRoute() {
      return self.root.curRoute
    },
    get viewingVideoData() {
      return stripMobx(self.root.viewing.video)
    },
  }))
  .actions(self => ({
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default VideoBanner
