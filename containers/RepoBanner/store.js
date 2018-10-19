/*
* RepoBanner store
*
*/

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger, stripMobx } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:RepoBanner')
/* eslint-enable no-unused-vars */

const RepoBanner = t
  .model('RepoBanner', {})
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get curRoute() {
      return self.root.curRoute
    },
    get viewingRepoData() {
      return stripMobx(self.root.viewing.repo)
    },
  }))
  .actions(self => ({
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default RepoBanner
