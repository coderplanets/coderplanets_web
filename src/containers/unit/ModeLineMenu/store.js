/*
 * ModeLineMenu store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
// import {} from 'ramda'

import { markStates, buildLog, stripMobx } from '@/utils'
/* eslint-disable-next-line */
const log = buildLog('S:ModeLineMenu')

const ModeLineMenu = T.model('ModeLineMenu', {})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
    get curActive() {
      return {
        community: stripMobx(self.root.viewing.community),
        thread: self.root.viewing.activeThread,
      }
    },
  }))
  .actions((self) => ({
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default ModeLineMenu
