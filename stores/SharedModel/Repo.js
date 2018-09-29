import { types as t } from 'mobx-state-tree'

import { PAGE_SIZE } from '../../config'

import { User } from './User'
import { Community } from './Community'
import { Tag } from './Tag'

const Contributor = t.model('Contributor', {
  avatar: t.string,
  nickname: t.string,
  htmlUrl: t.string,
})

const Language = t.model('Language', {
  name: t.string,
  color: t.string,
})

export const Repo = t.model('Reop', {
  id: t.maybeNull(t.string),
  title: t.maybeNull(t.string),
  ownerName: t.maybeNull(t.string),
  ownerUrl: t.maybeNull(t.string),
  repoUrl: t.maybeNull(t.string),

  desc: t.maybeNull(t.string),
  homepageUrl: t.maybeNull(t.string),
  readme: t.maybeNull(t.string),

  issuesCount: t.optional(t.number, 0),
  prsCount: t.optional(t.number, 0),
  starCount: t.optional(t.number, 0),
  forkCount: t.optional(t.number, 0),
  watchCount: t.optional(t.number, 0),

  primaryLanguage: t.maybeNull(Language),
  license: t.maybeNull(t.string),
  releaseTag: t.maybeNull(t.string),
  contributors: t.array(Contributor),

  author: t.maybeNull(User),
  views: t.optional(t.number, 0),
  communities: t.optional(t.array(Community), []),
  tags: t.optional(t.array(Tag), []),
  insertedAt: t.optional(t.string, ''),
  updatedAt: t.optional(t.string, ''),
})

export const PagedRepos = t.model('PagedRepos', {
  entries: t.optional(t.array(Repo), []),
  pageNumber: t.optional(t.number, 1),
  pageSize: t.optional(t.number, PAGE_SIZE.COMMON),
  totalCount: t.optional(t.number, 0),
  totalPages: t.optional(t.number, 0),
})
