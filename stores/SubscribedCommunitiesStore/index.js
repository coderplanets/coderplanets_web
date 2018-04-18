/*
 * SubscribedCommunitiesStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'
import { Community } from '../SharedModel'

import { markStates, makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:SubscribedCommunitiesStore')
/* eslint-enable no-unused-vars */

const SubscribedCommunitiesStore = t
  .model('SubscribedCommunitiesStore', {
    entries: t.optional(t.array(Community), []),
    pageNumber: t.optional(t.number, 1),
    pageSize: t.optional(t.number, 20), // TODO: USE CONSTANTS
    totalCount: t.optional(t.number, 1),
    totalPages: t.optional(t.number, 1),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get all() {
      return {
        entries: self.entries,
        pageNumber: self.pageNumber,
        pageSize: self.pageSize,
        totalCount: self.totalCount,
        totalPages: self.totalPages,
      }
    },
  }))
  .actions(self => ({
    load(data) {
      self.entries = data.entries
      self.pageNumber = data.pageNumber
      self.pageSize = data.pageSize
      self.totalCount = data.totalCount
      self.totalPages = data.totalPages
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default SubscribedCommunitiesStore
