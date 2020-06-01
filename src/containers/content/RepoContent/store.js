/*
 * RepoContent store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'

import { markStates, buildLog } from '@/utils'

/* eslint-disable-next-line */
const log = buildLog('S:RepoContent')

const RepoContent = T.model('RepoContent', {})
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
