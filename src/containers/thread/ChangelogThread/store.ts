/*
 * ChangelogThread store
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
// import {} from 'ramda'

import type { TCommunity, TRootStore } from '@/spec'
import { buildLog } from '@/utils/logger'
import { markStates, toJS } from '@/utils/mobx'

/* eslint-disable-next-line */
const log = buildLog('S:ChangelogThread')

const ChangelogThread = T.model('ChangelogThread', {})
  .views((self) => ({
    get curCommunity(): TCommunity {
      const root = getParent(self) as TRootStore

      return toJS(root.viewing.community)
    },
  }))
  .actions((self) => ({
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof ChangelogThread>

export default ChangelogThread