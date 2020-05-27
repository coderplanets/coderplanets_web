/*
 * UserBilling store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'

import { PAGE_SIZE } from '@/config'
import { markStates, buildLog, stripMobx } from '@/utils'
import { emptyPagiData } from '@/model'

/* eslint-disable-next-line */
const log = buildLog('S:UserBilling')

const Bill = T.model('Bill', {
  id: T.string,
  hashId: T.string,
  paymentMethod: T.string,
  paymentUsage: T.string,
  state: T.string,
  amount: T.number,
  note: T.optional(T.string, ''),
  insertedAt: T.optional(T.string, ''),
})

const PagedBillRecords = T.model('PagedBillRecords', {
  entries: T.optional(T.array(Bill), []),
  pageNumber: T.optional(T.number, 1),
  pageSize: T.optional(T.number, PAGE_SIZE.D),
  totalCount: T.optional(T.number, 0),
  totalPages: T.optional(T.number, 0),
})

const UserBilling = T.model('UserBilling', {
  pagedBillRecords: T.optional(PagedBillRecords, emptyPagiData),
})
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get pagedBillRecordsData() {
      return stripMobx(self.pagedBillRecords)
    },
    get accountInfo() {
      return self.root.accountInfo
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
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default UserBilling
