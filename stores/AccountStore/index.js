/*
 * AccountStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:AccountStore')
/* eslint-enable no-unused-vars */

const AccountStore = t
  .model('AccountStore', {
    nickname: t.optional(t.string, ''),
    bio: t.optional(t.string, ''),
    avatar: t.optional(t.string, ''),
    fromGithub: t.optional(t.boolean, false),
    fromWeixin: t.optional(t.boolean, false),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get accountInfo() {
      const { nickname, bio, avatar, fromGithub, fromWeixin } = self
      return {
        nickname,
        bio,
        avatar,
        fromGithub,
        fromWeixin,
      }
    },
  }))
  .actions(self => ({
    updateAccount(sobj) {
      self.markState(sobj)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default AccountStore
