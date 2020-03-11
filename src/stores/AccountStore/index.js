/*
 * AccountStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'
// import { PAGE_SIZE } from '@config'

import { markStates, buildLog, stripMobx, BStore } from '@utils'
import { User, EmptyUser, PagedCommunities } from '@model'

/* eslint-disable-next-line */
const log = buildLog('S:AccountStore')

const AccountStore = t
  .model('AccountStore', {
    user: t.optional(User, {}),
    isValidSession: t.optional(t.boolean, false),
    userSubscribedCommunities: t.maybeNull(PagedCommunities),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get accountInfo() {
      return {
        ...stripMobx(self.user),
        isLogin: self.isValidSession,
        isValidSession: self.isValidSession,
      }
    },
    get subscribedCommunities() {
      if (!self.userSubscribedCommunities) {
        return { entries: [] }
      }
      return stripMobx(self.userSubscribedCommunities)
      /*
      const { user: { subscribedCommunities } } = self
      return {
        ...stripMobx(subscribedCommunities),
      }
      */
    },
    get isLogin() {
      return self.isValidSession
    },
    get pageDensity() {
      return parseInt(self.user.customization.displayDensity, 10)
    },
  }))
  .actions(self => ({
    logout() {
      self.root.preview.close()
      self.sessionCleanup()
    },
    isMemberOf(type) {
      const { achievement } = stripMobx(self.user)
      if (!achievement) return false
      return achievement[type] || false
    },
    updateAccount(sobj) {
      const user = R.merge(stripMobx(self.user), { ...sobj })

      self.mark({ user })
    },
    updateSesstion({ isValid, user }) {
      self.isValidSession = isValid
      if (isValid) {
        self.setSession(user, BStore.get('token'))
        return self.updateAccount(user || {})
      }
      return self.sessionCleanup()
    },
    setSession(user, token) {
      // log('setSession user: ', user)
      // log('setSession token: ', token)

      BStore.set('user', user)
      BStore.set('token', token)
      BStore.cookie.set('jwtToken', token)
    },
    sessionCleanup() {
      self.user = EmptyUser
      self.isValidSession = false
      BStore.remove('user')
      BStore.remove('token')
      BStore.cookie.remove('jwtToken')
    },
    loadSubscribedCommunities(data) {
      // self.user.subscribedCommunities = data
      self.userSubscribedCommunities = data
    },
    addSubscribedCommunity(community) {
      const {
        userSubscribedCommunities: { entries },
      } = self

      self.userSubscribedCommunities.entries = R.insert(0, community, entries)
      self.userSubscribedCommunities.totalCount += 1

      // self.root.communitiesContent.toggleSubscribe(community)

      /*

      const {
        user: {
          subscribedCommunities: { entries },
        },
      } = self

      self.user.subscribedCommunities.entries = R.insert(0, community, entries)
      self.user.subscribedCommunities.totalCount += 1

      self.root.communitiesContent.toggleSubscribe(community)
      */
    },

    removeSubscribedCommunity(community) {
      const {
        userSubscribedCommunities: { entries },
      } = self

      const index = R.findIndex(R.propEq('id', community.id), entries)
      self.userSubscribedCommunities.entries = R.remove(index, 1, entries)
      self.userSubscribedCommunities.totalCount -= 1

      // self.root.communitiesContent.toggleSubscribe(community)
      /*
         const { user: { subscribedCommunities: { entries } } } = self

         const index = R.findIndex(R.propEq('id', community.id), entries)
         self.user.subscribedCommunities.entries = R.remove(index, 1, entries)
         self.user.subscribedCommunities.totalCount -= 1

         self.root.communitiesContent.toggleSubscribe(community)
       */
    },
    updateC11N(options) {
      const curCustomization = R.clone(self.accountInfo.customization)
      self.user.customization = R.merge(curCustomization, options)
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default AccountStore
