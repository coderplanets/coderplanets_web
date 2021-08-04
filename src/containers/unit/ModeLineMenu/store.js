/*
 * ModeLineMenu store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
// import {} from 'ramda'

import { markStates, toJS } from '@/utils/mobx'

const ModeLineMenu = T.model('ModeLineMenu', {})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
    get curActive() {
      return {
        community: toJS(self.root.viewing.community),
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
