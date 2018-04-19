/*
 * SubscribedCommunitiesStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'
/* import { Community } from '../SharedModel' */

import { markStates, makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:SubscribedCommunitiesStore')
/* eslint-enable no-unused-vars */

export const Community = t.model('Community', {
  id: t.string,
  title: t.string,
  raw: t.string,
  logo: t.string,
  recentContributesDigest: t.optional(t.array(t.number), []),
})

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
      self.markState(data)
    },
    add(community) {
      /* self.entries = R.concat(self.entries, community) */
      self.entries = R.insert(0, community, self.entries)
      self.totalCount += 1
      self.root.communities.toggleSubscribe(community)
    },
    remove(community) {
      const index = R.findIndex(R.propEq('id', community.id), self.entries)
      self.entries = R.remove(index, 1, self.entries)
      self.totalCount -= 1
      self.root.communities.toggleSubscribe(community)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default SubscribedCommunitiesStore
