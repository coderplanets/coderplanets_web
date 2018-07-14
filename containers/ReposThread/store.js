/*
* ReposThread store
*
*/

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:ReposThread')
/* eslint-enable no-unused-vars */

// NOTE: add me to ../../stores/index && ../../stores/RootStore/index
const ReposThread = t
  .model('ReposThread', {})
  .views(self => ({
    get root() {
      return getParent(self)
    },
  }))
  .actions(self => ({
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default ReposThread
