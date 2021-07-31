/*
 * RichEditor store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'

import { markStates } from '@/utils/mobx'

// NOTE: add me to stores/index && stores/RootStore/index
const RichEditor = T.model('RichEditor', {})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
  }))
  .actions((self) => ({
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default RichEditor
