/*
 * ArticleAuthorCard store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
import { merge } from 'ramda'

import { markStates, buildLog, stripMobx } from '@/utils'
import { User } from '@/model'

/* eslint-disable-next-line */
const log = buildLog('S:ArticleAuthorCard')

const ArticleAuthorCard = T.model('ArticleAuthorCard', {
  hasFollowed: T.optional(T.boolean, false),
  following: T.optional(T.boolean, false),
  user: T.optional(User, {}),
})
  .views((self) => ({
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
  .actions((self) => ({
    authWarning(options) {
      self.root.authWarning(options)
    },
    updateUser(sobj) {
      const user = merge(self.user, { ...sobj })
      self.mark({ user })
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default ArticleAuthorCard
