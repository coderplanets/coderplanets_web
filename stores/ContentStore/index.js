/*
 * ContentStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger, TYPE } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:ContentStore')
/* eslint-enable no-unused-vars */

const ContentStore = t
  .model('ContentStore', {})
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get current() {
      // type depands on route main_query
      return {
        // type: TYPE.POST_PAGE,
        type: TYPE.COMMUNITY_PAGE,
        /* type: TYPE.CHEATSHEET_ROOT_PAGE, */
        /* type: TYPE.COMMUNITIES_ROOT_PAGE, */
        content: self.root.curCommunity.data,
      }
    },
    get curRoute() {
      return self.root.curRoute
    },
  }))
  .actions(self => ({
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default ContentStore
