/*
 * BannerStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger } from 'utils'
/* import { Post } from '../SharedModel' */

/* eslint-disable-next-line */
const debug = makeDebugger('S:BannerStore')

const BannerStore = t
  .model('BannerStore', {})
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get curRoute() {
      return self.root.curRoute
    },
  }))
  .actions(self => ({
    markRoute(query) {
      self.root.markRoute(query)
    },
    setViewing(sobj) {
      self.root.setViewing(sobj)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default BannerStore
