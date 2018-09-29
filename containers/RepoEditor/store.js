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

    // error
    error: t.maybeNull(t.string),
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
    closePreview() {
      self.root.closePreview()
    },
    toast(type, options) {
      self.root.toast(type, options)
    },
    changeErr(options) {
      self.toast('error', options)
    },
    handleError(error) {
      debug(error)
      self.markState({ error, searching: false })
      switch (error) {
        case ERR.NOT_FOUND: {
          return self.changeErr({
            title: '仓库未找到',
            msg: '请确认输入的仓库地址',
          })
        }
        case ERR.AUTH: {
          return self.changeErr({
            title: 'Github 鉴权出错',
            msg: 'token 可能过期，请尝试重新登录',
          })
        }
        default: {
          return self.changeErr({ title: '未知错误', msg: '...' })
        }
      }
    },
    validator(type) {
      switch (type) {
        case 'searchValue': {
          const result = changeset({ searchValue: self.searchValue })
            .exsit({ searchValue: 'Github仓库地址' }, self.changeErr)
            .startsWith(
              { searchValue: 'Github仓库地址' },
              'https://github.com/',
              self.changeErr
            )
            .min({ searchValue: 'Github仓库地址' }, 20, self.changeErr)
            .done()

          try {
            const [owner, name] = self.searchValue
              .split('https://github.com/')[1]
              .split('/')

            self.owner = owner
            self.name = name

            return result.passed
          } catch (e) {
            self.changeErr({ title: 'Github仓库地址', msg: '解析错误' })
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
