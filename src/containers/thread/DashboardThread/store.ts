/*
 * DashboardThread store
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { values } from 'ramda'

import type { TCommunity, TRootStore } from '@/spec'
import { buildLog } from '@/utils/logger'
import { markStates, toJS } from '@/utils/mobx'

import { TAB } from './constant'

/* eslint-disable-next-line */
const log = buildLog('S:DashboardThread')

const DashboardThread = T.model('DashboardThread', {
  curTab: T.optional(T.enumeration(values(TAB)), TAB.OVERVIEW),
})
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

export type TStore = Instance<typeof DashboardThread>

export default DashboardThread
