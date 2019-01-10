/*
* RepoContent store
*
*/

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:RepoContent')
/* eslint-enable no-unused-vars */

const RepoContent = t
  .model('RepoContent', {})
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get viewingData() {
      return self.root.viewingData
    },
  }))
  .actions(self => ({
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default RepoContent
