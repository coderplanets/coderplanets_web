/*
 * CommunityContent store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'

import { markStates, buildLog, stripMobx } from '@/utils'

/* eslint-disable-next-line */
const log = buildLog('S:CommunityContent')

const CommunityContent = T.model('CommunityContent', {})
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
    get accountInfo() {
      return self.root.accountInfo
    },
  }))
  .actions((self) => ({
    setViewing(sobj) {
      self.root.setViewing(sobj)
    },
    markRoute(query) {
      self.root.markRoute(query)
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default CommunityContent
