/*
 * UsersThread store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'

import { markStates, buildLog, stripMobx } from '@/utils'
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
    get root() {
      return getParent(self)
    },
    get curTheme() {
      return self.root.theme.curTheme
    },
    get curCommunity() {
      return stripMobx(self.root.viewing.community)
    },
    get geoInfosData() {
      return stripMobx(self.geoInfos)
    },
  }))
  .actions((self) => ({
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default UsersThread
