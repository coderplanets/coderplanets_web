/*
 * BannerStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger, stripMobx } from '../../utils'
/* import { Post } from '../SharedModel' */

/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:BannerStore')
/* eslint-enable no-unused-vars */

const BannerStore = t
  .model('BannerStore', {})
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get curRoute() {
      return self.root.curRoute
    },
    get curCommunity() {
      return stripMobx(self.root.curCommunity)
    },
  }))
  .actions(self => ({
    loadCurCommunity(sobj) {
      self.root.curCommunity.load(sobj)
    },
    markRoute(query) {
      self.root.markRoute(query)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default BannerStore
