/*
 * RepoEditor store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'

import { ERR } from '@/constant'
import { markStates, toJS } from '@/utils/mobx'
import { changeset } from '@/utils/validator'
import { Repo } from '@/model'

const RepoEditor = T.model('RepoEditor', {
  editRepo: T.maybeNull(Repo),
  curView: T.optional(T.enumeration('curView', ['search', 'show']), 'search'),
  subView: T.optional(T.enumeration('curView', ['search', 'token']), 'search'),
  searchValue: T.optional(T.string, ''),
  searching: T.optional(T.boolean, false),
  publishing: T.optional(T.boolean, false),
  // repo owner
  owner: T.optional(T.string, ''),
  // repo name
  name: T.optional(T.string, ''),

  // github api token
  tokenValue: T.optional(T.string, ''),

  // errorType
  errorType: T.maybeNull(T.string),
})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
    get viewing() {
      return toJS(self.root.viewing)
    },
    get editRepoData() {
      return toJS(self.editRepo)
    },
  }))
  .actions((self) => ({
    toast(type, options) {
      self.root.toast(type, options)
    },
    changesetErr(options) {
      self.root.changesetErr(options)
    },
    handleError(errorType) {
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
    validator(type) {
      switch (type) {
        case 'searchValue': {
          const result = changeset({ searchValue: self.searchValue })
            .exist({ searchValue: 'Github仓库地址' }, self.changesetErr)
            .startsWith(
              { searchValue: 'Github仓库地址' },
              'https://github.com/',
              self.changesetErr,
            )
            .min({ searchValue: 'Github仓库地址' }, 20, self.changesetErr)
            .done()

          try {
            const [owner, name] = self.searchValue
              .split('https://github.com/')[1]
              .split('/')

            self.owner = owner
            self.name = name

            return result.passed
          } catch (e) {
            self.changesetErr({ title: 'Github仓库地址', msg: '解析错误' })
            return false
          }
        }
        case 'tokenValue': {
          const result = changeset({ tokenValue: self.tokenValue })
            .exist({ tokenValue: 'Github Token' }, self.changesetErr)
            .done()

          return result.passed
        }
        default: {
          return false
        }
      }
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default RepoEditor
