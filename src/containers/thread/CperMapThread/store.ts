/*
 * CperMapThread store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'

import type { TCommunity, TTheme, TRootStore } from '@/spec'
import { markStates, toJS } from '@/utils/mobx'

const Geo = T.model('Thread', {
  city: T.string,
  value: T.number,
  long: T.number,
  lant: T.number,
})

const CperMapThread = T.model('CperMapThread', {
  geoInfos: T.optional(T.array(Geo), []),
  geoDataLoading: T.optional(T.boolean, false),
  // { city: '成都', value: 1, long: 104.06, lant: 30.67 }
})
  .views((self) => ({
    get curTheme(): TTheme {
      const root = getParent(self) as TRootStore
      return root.theme.curTheme
    },
    get curCommunity(): TCommunity {
      const root = getParent(self) as TRootStore
      return toJS(root.viewing.community)
    },
    get geoInfosData() {
      return toJS(self.geoInfos)
    },
  }))
  .actions((self) => ({
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof CperMapThread>
export default CperMapThread
