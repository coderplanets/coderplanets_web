/*
 * UsersThread store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'

import { markStates, buildLog, stripMobx } from '@/utils'
import { TCommunity, TTheme, TRootStore } from '@/spec'
/* eslint-disable-next-line */
const log = buildLog('S:UsersThread')

const Geo = T.model('Thread', {
  city: T.string,
  value: T.number,
  long: T.number,
  lant: T.number,
})

const UsersThread = T.model('UsersThread', {
  geoInfos: T.optional(T.array(Geo), []),
  geoDataLoading: T.optional(T.boolean, false),
  // { city: '成都', value: 1, long: 104.06, lant: 30.67 }
  showNums: T.optional(T.boolean, false),
})
  .views((self) => ({
    get curTheme(): TTheme {
      const root = getParent(self) as TRootStore
      return root.theme.curTheme
    },
    get curCommunity(): TCommunity {
      const root = getParent(self) as TRootStore
      return stripMobx(root.viewing.community)
    },
    get geoInfosData() {
      return stripMobx(self.geoInfos)
    },
  }))
  .actions((self) => ({
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof UsersThread>
export default UsersThread
