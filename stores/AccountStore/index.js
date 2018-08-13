/*
 * AccountStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'
import store from 'store'

import { markStates, makeDebugger, stripMobx } from '../../utils'
import { User, EmptyUser } from '../SharedModel'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:AccountStore')
/* eslint-enable no-unused-vars */

const AccountStore = t
  .model('AccountStore', {
    user: t.optional(User, {}),
    isValidSession: t.optional(t.boolean, false),
    // subscribedCommunites: ...
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get accountInfo() {
      return {
        ...stripMobx(self.user),
      }
    },

    get subscribedCommunities() {
      const {
        user: { subscribedCommunities },
      } = self
      return {
        ...stripMobx(subscribedCommunities),
      }
    },
    get isLogin() {
      return self.isValidSession
    },
  }))
  .actions(self => ({
    logout() {
      self.user = EmptyUser
      self.root.preview.close()
      store.remove('user')
    },
    updateAccount(sobj) {
      const user = R.merge(self.user, { ...sobj })
      self.markState({ user })
    },

    updateLoginState(loginState) {
      const { isLogin, user } = loginState
      if (isLogin) {
        self.isValidSession = isLogin
        return self.updateAccount(user)
      }
    },

    loadSubscribedCommunities(data) {
      self.user.subscribedCommunities = data
    },

    addSubscribedCommunity(community) {
      const {
        user: {
          subscribedCommunities: { entries },
        },
      } = self

      self.user.subscribedCommunities.entries = R.insert(0, community, entries)
      self.user.subscribedCommunities.totalCount += 1

      self.root.communitiesContent.toggleSubscribe(community)
    },

    removeSubscribedCommunity(community) {
      const {
        user: {
          subscribedCommunities: { entries },
        },
      } = self

      const index = R.findIndex(R.propEq('id', community.id), entries)
      self.user.subscribedCommunities.entries = R.remove(index, 1, entries)
      self.user.subscribedCommunities.totalCount -= 1

      self.root.communitiesContent.toggleSubscribe(community)
    },

    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default AccountStore
