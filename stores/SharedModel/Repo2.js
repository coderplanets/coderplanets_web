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

export const Repo2 = t.model('Reop2', {
  id: t.maybeNull(t.string),
  title: t.string,
  ownerName: t.string,
  ownerUrl: t.string,
  repoUrl: t.string,

  desc: t.maybeNull(t.string),
  homepageUrl: t.maybeNull(t.string),
  readme: t.maybeNull(t.string),

  issuesCount: t.optional(t.number, 0),
  prsCount: t.optional(t.number, 0),
  starCount: t.optional(t.number, 0),
  forkCount: t.optional(t.number, 0),
  watchCount: t.optional(t.number, 0),

  primaryLanguage: Language,

  license: t.maybeNull(t.string),
  releaseTag: t.optional(t.string, ''),
  contributors: t.array(Contributor),

  author: t.maybeNull(User),
  views: t.optional(t.number, 0),
  communities: t.optional(t.array(Community), []),
  tags: t.optional(t.array(Tag), []),
  insertedAt: t.optional(t.string, ''),
  updatedAt: t.optional(t.string, ''),
})

export const PagedRepos2 = t.model('PagedRepos', {
  entries: t.optional(t.array(Repo2), []),
  pageNumber: t.optional(t.number, 1),
  pageSize: t.optional(t.number, PAGE_SIZE.COMMON),
  totalCount: t.optional(t.number, 0),
  totalPages: t.optional(t.number, 0),
})
