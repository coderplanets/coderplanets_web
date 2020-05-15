/*
 * CommunityContent store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, buildLog } from '@/utils'

/* eslint-disable-next-line */
const log = buildLog('S:CommunityContent')

const CommunityContent = T.model('CommunityContent', {})
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get curRoute() {
      return self.root.curRoute
    },
  }))
  .actions(self => ({
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default CommunityContent
