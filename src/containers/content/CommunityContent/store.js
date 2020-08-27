/*
 * CommunityContent store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'

import { C11N } from '@/constant'
import { markStates, buildLog, stripMobx } from '@/utils'

/* eslint-disable-next-line */
const log = buildLog('S:CommunityContent')

const CommunityContent = T.model('CommunityContent', {
  layout: T.optional(
    T.enumeration('layout', [C11N.DIGEST, C11N.DIGEST_ROW]),
    C11N.DIGEST_ROW,
  ),
})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
    get curRoute() {
      return self.root.curRoute
    },
    get viewing() {
      return stripMobx(self.root.viewing)
    },
  }))
  .actions((self) => ({
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default CommunityContent
