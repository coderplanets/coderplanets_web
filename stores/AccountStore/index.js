/*
 * AccountStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import {
  markStates,
  makeDebugger,
  stripMobx,
  /* BStore, */
  Global,
  BStore,
} from '../../utils'
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
      self.root.preview.close()
      self.sesstionCleanup()
      Global.location.reload(false)
    },
    updateAccount(sobj) {
      const user = R.merge(self.user, { ...sobj })
      self.markState({ user })
    },
    updateSessionState(sessionState) {
      const { isValid, user } = sessionState
      if (isValid) {
        self.isValidSession = isValid
        BStore.set('passports', user.cmsPassport)

        const token = BStore.get('token')
        if (token) {
          BStore.cookie.set('jwtToken', token)
        }
        return self.updateAccount(user)
      }
      // if not valid then clean up
      self.sesstionCleanup()
    },
    sesstionCleanup() {
      self.user = EmptyUser
      self.isValidSession = false
      BStore.remove('user')
      BStore.remove('token')
      BStore.cookie.remove('jwtToken')
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
