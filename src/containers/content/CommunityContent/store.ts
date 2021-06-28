/*
 * CommunityContent store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'

import type { TRootStore, TAccount, TRoute } from '@/spec'
import { markStates, buildLog } from '@/utils'

/* eslint-disable-next-line */
const log = buildLog('S:CommunityContent')

const CommunityContent = T.model('CommunityContent', {})
  .views((self) => ({
    get curRoute(): TRoute {
      const root = getParent(self) as TRootStore
      return root.curRoute
    },
    get accountInfo(): TAccount {
      const root = getParent(self) as TRootStore
      return root.accountInfo
    },
  }))
  .actions((self) => ({
    setViewing(sobj): void {
      const root = getParent(self) as TRootStore
      root.setViewing(sobj)
    },
    markRoute(query): void {
      const root = getParent(self) as TRootStore
      root.markRoute(query)
    },
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof CommunityContent>
export default CommunityContent
