/*
 * JoinModal store
 *
 */

import { types as T, Instance } from 'mobx-state-tree'

import { markStates } from '@/utils/mobx'

const JoinModal = T.model('JoinModal', {
  show: T.optional(T.boolean, false),
  activeGroup: T.optional(T.string, 'IN'),
}).actions((self) => ({
  mark(sobj) {
    markStates(sobj, self)
  },
}))

export type TStore = Instance<typeof JoinModal>
export default JoinModal
