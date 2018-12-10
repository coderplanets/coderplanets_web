/*
 * UserBilling store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'
import { PAGE_SIZE } from '../../config'

import { markStates, makeDebugger, stripMobx } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:UserBilling')
/* eslint-enable no-unused-vars */

const Bill = t.model('Bill', {
  id: t.string,
  hashId: t.string,
  paymentMethod: t.string,
  paymentUsage: t.string,
  state: t.string,
  amount: t.number,
  note: t.optional(t.string, ''),
  insertedAt: t.optional(t.string, ''),
})

const PagedBillRecords = t.model('PagedBillRecords', {
  entries: t.optional(t.array(Bill), []),
  pageNumber: t.optional(t.number, 1),
  pageSize: t.optional(t.number, PAGE_SIZE.D),
  totalCount: t.optional(t.number, 0),
  totalPages: t.optional(t.number, 0),
})

const UserBilling = t
  .model('UserBilling', {
    pagedBillRecords: t.maybeNull(PagedBillRecords),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get pagedBillRecordsData() {
      return stripMobx(self.pagedBillRecords)
    },
    get isSelfViewing() {
      return self.root.viewing.isSelfViewing
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
