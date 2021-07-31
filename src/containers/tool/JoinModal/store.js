/*
 * JoinModal store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'

import { markStates } from '@/utils/mobx'

const JoinModal = T.model('JoinModal', {
  show: T.optional(T.boolean, false),
})
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

export default JoinModal
