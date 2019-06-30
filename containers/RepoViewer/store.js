/*
 * RepoViewer store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { ERR } from '@constant'
import { markStates, buildLog, stripMobx } from '@utils'

/* eslint-disable-next-line */
const log = buildLog('S:RepoViewer')

const RepoViewer = t
  .model('RepoViewer', {
    loading: t.optional(t.boolean, false),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get isLogin() {
      return self.root.account.isLogin
    },
    get viewingData() {
      return self.root.viewingData
    },
    get curCommunity() {
      return stripMobx(self.root.viewing.community)
    },
  }))
  .actions(self => ({
    setViewing(sobj) {
      self.root.setViewing(sobj)
    },
    changesetErr(options) {
      self.root.changesetErr(options)
    },
    handleError(errorType) {
      log(errorType)
      self.markState({ errorType, loading: false })
      switch (errorType) {
        case ERR.NOT_FOUND:
          return self.changesetErr({
            title: '仓库未找到',
            msg: '请确认输入的仓库地址',
          })

        case ERR.AUTH:
          return self.changesetErr({
            title: 'Github 鉴权出错',
            msg: 'Github token 可能过期，请重试或重新设置 Github Token',
          })

        case ERR.TIMEOUT:
          return self.changesetErr({
            title: 'Github 超时',
            msg: '特殊国情，请稍后重试',
          })

        default: {
          return self.changesetErr({ title: '未知错误', msg: '...' })
        }
      }
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default RepoViewer
