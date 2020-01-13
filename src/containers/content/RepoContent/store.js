/*
 * RepoContent store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, buildLog } from '@utils'

/* eslint-disable-next-line */
const log = buildLog('S:RepoContent')

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
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default RepoContent
