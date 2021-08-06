/*
 * RichEditor store
 *
 */

import { types as T, Instance } from 'mobx-state-tree'

import { markStates } from '@/utils/mobx'

const RichEditor = T.model('RichEditor', {})
  .views((self) => ({}))
  .actions((self) => ({
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof RichEditor>
export default RichEditor
