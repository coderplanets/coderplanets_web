/*
 * RepoViewer store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'

import { ERR } from '@/constant'
import { markStates, toJS } from '@/utils/mobx'

const RepoViewer = T.model('RepoViewer', {
  loading: T.optional(T.boolean, false),
})
  .views((self) => ({
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
      return toJS(self.root.viewing.community)
    },
  }))
  .actions((self) => ({
    setViewing(sobj) {
      self.root.setViewing(sobj)
    },
    changesetErr(options) {
      self.root.changesetErr(options)
    },
    handleError(errorType) {
      self.mark({ errorType, loading: false })
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
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default RepoViewer
