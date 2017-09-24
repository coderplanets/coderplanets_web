/*
 * GithubEampleStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import { makeDebugger } from '../../utils/debug'

// const debug = makeDebugger('S:GithubEampleStore')

const RepoOwner = t.model('RepoOwner', {
  login: t.string,
  avatar_url: t.string,
  html_url: t.string,
})

const Repo = t.model('Repo', {
  id: t.number,
  description: t.string,
  language: t.maybe(t.string), // language maybe null, like awesome-react
  stargazers_count: t.number,
  name: t.string,
  owner: RepoOwner,
})

const GithubEampleStore = t
  .model('GithubEampleStore', {
    repos: t.optional(t.array(Repo), []),
  })
  .views(self => ({
    get app() {
      return getParent(self)
    },
    get githubRepos() {
      return self.repos
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
  }))

export default GithubEampleStore
