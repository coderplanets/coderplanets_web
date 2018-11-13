/*
 * WikiThread store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { Wiki } from '../../stores/SharedModel'
import { markStates, makeDebugger, stripMobx, TYPE, ERR } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:WikiThread')
/* eslint-enable no-unused-vars */

const WikiThread = t
  .model('WikiThread', {
    wiki: t.optional(Wiki, { readme: '' }),
    curView: t.optional(
      t.enumeration('curView', [
        TYPE.RESULT,
        TYPE.LOADING,
        TYPE.NOT_FOUND,
        TYPE.RESULT_EMPTY,
      ]),
      TYPE.RESULT
    ),
    // errorType
    errorType: t.maybeNull(t.string),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get curCommunity() {
      return stripMobx(self.root.viewing.community)
    },
    get wikiData() {
      return stripMobx(self.wiki)
    },
  }))
  .actions(self => ({
    changesetErr(options) {
      self.root.changesetErr(options)
    },
    handleError(errorType) {
      debug(errorType)
      self.markState({ errorType, searching: false })
      switch (errorType) {
        case ERR.NOT_FOUND: {
          return self.changesetErr({
            title: '仓库未找到',
            msg: '请确认输入的仓库地址',
          })
        }
        case ERR.AUTH: {
          return self.changesetErr({
            title: 'Github 鉴权出错',
            msg: 'token 可能过期，请尝试重新登录',
          })
        }
        case ERR.TIMEOUT: {
          return self.changesetErr({
            title: 'Github 超时',
            msg: '特殊国情，请稍后重试',
          })
        }
        default: {
          return self.changesetErr({ title: '未知错误', msg: '...' })
        }
      }
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default WikiThread
