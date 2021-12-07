/*
 * ModeLineMenu store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
// import {} from 'ramda'

import type { TRootStore } from '@/spec'
import { markStates, toJS } from '@/utils/mobx'

import { TCurActive } from './spec'

const ModeLineMenu = T.model('ModeLineMenu', {})
  .views((self) => ({
    get curActive(): TCurActive {
      const root = getParent(self) as TRootStore

      return {
        community: toJS(root.viewing.community),
        thread: root.viewing.activeThread,
      }
    },
  }))
  .actions((self) => ({
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof ModeLineMenu>
export default ModeLineMenu
