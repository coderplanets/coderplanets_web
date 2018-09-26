/*
 * UsersThread store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger, stripMobx } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:UsersThread')
/* eslint-enable no-unused-vars */

const Geo = t.model('Thread', {
  city: t.string,
  value: t.number,
  long: t.number,
  lant: t.number,
})

const UsersThread = t
  .model('UsersThread', {
    geoInfos: t.optional(t.array(Geo), []),
    geoDataLoading: t.optional(t.boolean, false),
    // { city: '成都', value: 1, long: 104.06, lant: 30.67 }
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get geoInfosData() {
      return stripMobx(self.geoInfos)
    },
  }))
  .actions(self => ({
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default UsersThread
