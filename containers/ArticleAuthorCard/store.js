/*
 * ArticleAuthorCard store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { markStates, buildLog, stripMobx } from '@utils'
import { User } from '@model'

/* eslint-disable-next-line */
const log = buildLog('S:ArticleAuthorCard')

const ArticleAuthorCard = t
  .model('ArticleAuthorCard', {
    hasFollowd: t.optional(t.boolean, false),
    following: t.optional(t.boolean, false),
    user: t.optional(User, {}),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get isLogin() {
      return self.root.account.isLogin
    },
    get isSelfViewing() {
      const { isLogin } = self.root.accountInfo
      if (!isLogin) return false

      const { id: accountId } = self.root.accountInfo
      const { id: userId } = self.user
      return accountId === userId
    },
    get userData() {
      return stripMobx(self.user)
    },
  }))
  .actions(self => ({
    authWarning(options) {
      self.root.authWarning(options)
    },
    updateUser(sobj) {
      const user = R.merge(self.user, { ...sobj })
      self.markState({ user })
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default ArticleAuthorCard
