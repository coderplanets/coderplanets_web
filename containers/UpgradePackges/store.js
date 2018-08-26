/*
* UpgradePackges store
*
*/

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:UpgradePackges')
/* eslint-enable no-unused-vars */

const UpgradePackges = t
  .model('UpgradePackges', {
    show: t.optional(t.boolean, false),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
  }))
  .actions(self => ({
    upgradeHepler() {
      self.show = true
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default UpgradePackges
