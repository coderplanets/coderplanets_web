/*
* UserBilling store
*
*/

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:UserBilling')
/* eslint-enable no-unused-vars */

const UserBilling = t
  .model('UserBilling', {})
  .views(self => ({
    get root() {
      return getParent(self)
    },
  }))
  .actions(self => ({
    upgradeHepler() {
      self.root.upgradeHepler()
    },
    sponsorHepler() {
      self.root.sponsorHepler()
    },
    callGirlVerifier() {
      self.root.callGirlVerifier()
    },
    cashierHelper(opt) {
      self.root.cashierHelper(opt)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default UserBilling
