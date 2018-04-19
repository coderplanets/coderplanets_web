/*
 * CommunitiesContentStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:CommunitiesContentStore')
/* eslint-enable no-unused-vars */

const CommunitiesContentStore = t
  .model('CommunitiesContentStore', {
    category: t.optional(t.string, ''),
    subscribing: t.optional(t.boolean, false),
    subscribingId: t.maybe(t.string),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },

    get communities() {
      const { entries } = self.root.communities.all

      return {
        ...self.root.communities.all,
        entries: entries.toJSON(),
      }
    },
  }))
  .actions(self => ({
    loadCommunities(data) {
      self.root.communities.load(data)
    },
    addSubscribedCommunity(community) {
      self.root.subscribedCommunities.add(community)
    },
    removeSubscribedCommunity(community) {
      self.root.subscribedCommunities.remove(community)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default CommunitiesContentStore
