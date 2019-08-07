/*
 * CheatsheetThread store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { TYPE, ERR } from '@constant'
import { markStates, buildLog, stripMobx } from '@utils'
import { Cheatsheet } from '@model'

/* eslint-disable-next-line */
const log = buildLog('S:CheatsheetThread')

const CheatsheetThread = t
  .model('CheatsheetThread', {
    cheatsheet: t.optional(Cheatsheet, { readme: '' }),
    current: t.optional(t.string, ''),
    curView: t.optional(
      t.enumeration('curView', [
        TYPE.RESULT,
        TYPE.LOADING,
        TYPE.NOT_FOUND,
        TYPE.RESULT_EMPTY,
      ]),
      TYPE.RESULT
    ),
    errorType: t.maybeNull(t.string),
    showSyncWarning: t.optional(t.boolean, false),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get isLogin() {
      return self.root.account.isLogin
    },
    get curCommunity() {
      return stripMobx(self.root.viewing.community)
    },
    get cheatsheetData() {
      return stripMobx(self.cheatsheet)
    },
  }))
  .actions(self => ({
    changesetErr(options) {
      self.root.changesetErr(options)
    },
    handleError(errorType) {
      log(errorType)
      self.mark({ errorType, searching: false })
      switch (errorType) {
        case ERR.NOT_FOUND:
          return self.changesetErr({
            title: 'Cheatsheet 未找到',
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

export default CheatsheetThread
