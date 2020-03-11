/*
 * AvatarAdder store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { ERR } from '@constant'
import { markStates, buildLog, stripMobx } from '@utils'
import { GithubUser } from '@model'

/* eslint-disable-next-line */
const log = buildLog('S:AvatarAdder')

const AvatarAdder = t
  .model('AvatarAdder', {
    githubUser: t.maybeNull(GithubUser),
    searchValue: t.optional(t.string, ''),
    popoverVisiable: t.optional(t.boolean, false),
    searching: t.optional(t.boolean, false),

    errorType: t.maybeNull(t.string),
    /* ERR_TYPE:  */
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get githubUserData() {
      return stripMobx(self.githubUser)
    },
  }))
  .actions(self => ({
    changesetErr(options) {
      self.root.changesetErr(options)
    },
    handleError(errorType) {
      self.mark({ errorType, searching: false })
      switch (errorType) {
        case ERR.NOT_FOUND:
          return self.changesetErr({
            title: '用户未找到',
            msg: '请输入正确的 github 登陆用户名',
          })

        case ERR.AUTH:
          return self.changesetErr({
            title: 'Github 鉴权出错',
            msg: 'token 可能过期，请尝试重新登录',
          })

        case ERR.TIMEOUT:
          return self.changesetErr({
            title: 'Github 超时',
            msg: '特殊国情，请稍后重试',
          })

        default:
          return self.changesetErr({ title: '未知错误', msg: '...' })
      }
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default AvatarAdder
