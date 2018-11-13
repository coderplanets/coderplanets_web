/*
 * RepoEditor store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'

import { Repo } from '../../stores/SharedModel'

import {
  markStates,
  ERR,
  makeDebugger,
  changeset,
  stripMobx,
} from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:RepoEditor')
/* eslint-enable no-unused-vars */

const RepoEditor = t
  .model('RepoEditor', {
    editRepo: t.maybeNull(Repo),
    curView: t.optional(t.enumeration('curView', ['search', 'show']), 'search'),
    searchValue: t.optional(t.string, ''),
    searching: t.optional(t.boolean, false),
    // repo owner
    owner: t.optional(t.string, ''),
    // repo name
    name: t.optional(t.string, ''),

    // errorType
    errorType: t.maybeNull(t.string),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get viewing() {
      return stripMobx(self.root.viewing)
    },
    get editRepoData() {
      return stripMobx(self.editRepo)
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
    validator(type) {
      switch (type) {
        case 'searchValue': {
          const result = changeset({ searchValue: self.searchValue })
            .exsit({ searchValue: 'Github仓库地址' }, self.changesetErr)
            .startsWith(
              { searchValue: 'Github仓库地址' },
              'https://github.com/',
              self.changesetErr
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
        default: {
          return false
        }
      }
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default RepoEditor
