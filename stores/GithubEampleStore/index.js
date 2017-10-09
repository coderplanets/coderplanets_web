/*
 * GithubEampleStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { isObject } from '../../utils/functions'
// import { makeDebugger } from '../../utils/debug'

// const debug = makeDebugger('S:GithubEampleStore')

const RepoOwner = t.model('RepoOwner', {
  login: t.string,
  avatar_url: t.string,
  html_url: t.string,
})

const Repo = t.model('Repo', {
  id: t.number,
  description: t.maybe(t.string),
  language: t.maybe(t.string), // language maybe null, like awesome-react
  stargazers_count: t.number,
  name: t.string,
  owner: RepoOwner,
})

const GithubEampleStore = t
  .model('GithubEampleStore', {
    repos: t.optional(t.array(Repo), []),
    inputValue: t.optional(t.string, ''),
    searching: t.optional(t.boolean, false),
  })
  .views(self => ({
    get app() {
      return getParent(self)
    },
    get reposData() {
      return self.repos.toJSON()
    },
  }))
  .actions(self => ({
    replaceRepos(data) {
      //       debug('replaceRepos data: ', data)
      self.repos = data
    },
    clearRepos() {
      self.repos = []
    },

    markState(sobj) {
      if (!isObject(sobj)) {
        throw new Error('markState get no object params')
      }
      R.forEachObjIndexed((val, key) => {
        self[key] = val
      }, sobj)
    },
  }))

export default GithubEampleStore
