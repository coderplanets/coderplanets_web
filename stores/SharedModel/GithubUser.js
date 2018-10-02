import { types as t } from 'mobx-state-tree'

export const GithubUser = t.model('GithubUser', {
  githubId: t.maybeNull(t.string),
  avatar: t.string,
  nickname: t.string,
  htmlUrl: t.string,
  bio: t.maybeNull(t.string),
  company: t.maybeNull(t.string),
  location: t.maybeNull(t.string),
})

export const holder = 1
