import { types as t } from 'mobx-state-tree'

import { PAGE_SIZE } from '../../config'

import { User } from './User'
import { Community } from './Community'
import { Tag } from './Tag'

export const Repo = t.model('Reop', {
  id: t.maybe(t.string),
  repoName: t.maybe(t.string),
  desc: t.maybe(t.string),
  readme: t.maybe(t.string),
  language: t.maybe(t.string),

  author: t.maybe(User),

  repoLink: t.maybe(t.string),
  producer: t.maybe(t.string),
  producerLink: t.maybe(t.string),

  repoStarCount: t.optional(t.number, 0),
  repoForkCount: t.optional(t.number, 0),
  repoWatchCount: t.optional(t.number, 0),
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
