/*
 * WikiThread store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'

import { TYPE, ERR } from '@/constant'
import { markStates, buildLog, stripMobx } from '@/utils'
import { Wiki } from '@/model'

/* eslint-disable-next-line */
const log = buildLog('S:WikiThread')

const WikiThread = T.model('WikiThread', {
  wiki: T.optional(Wiki, { readme: '' }),
  curView: T.optional(
    T.enumeration('curView', [
      TYPE.RESULT,
      TYPE.LOADING,
      TYPE.NOT_FOUND,
      TYPE.RESULT_EMPTY,
    ]),
    TYPE.RESULT,
  ),
  // errorType
  errorType: T.maybeNull(T.string),
  showSyncWarning: T.optional(T.boolean, false),
})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
    get isLogin() {
      return self.root.account.isLogin
    },
    get curCommunity() {
      return stripMobx(self.root.viewing.community)
    },
    get wikiData() {
      return stripMobx(self.wiki)
    },
  }))
  .actions((self) => ({
    changesetErr(options) {
      self.root.changesetErr(options)
    },
    handleError(errorType) {
      log(errorType)
      self.mark({ errorType, searching: false })
      switch (errorType) {
        case ERR.NOT_FOUND:
          return self.changesetErr({
            title: '仓库未找到',
            msg: '请确认输入的仓库地址',
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

export default WikiThread
