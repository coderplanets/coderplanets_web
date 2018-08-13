import { types as t } from 'mobx-state-tree'

import { PAGE_SIZE } from '../../config'

import { User } from './User'
import { Community } from './Community'
import { Tag } from './Tag'

export const Repo = t.model('Reop', {
  id: t.maybeNull(t.string),
  repoName: t.maybeNull(t.string),
  desc: t.maybeNull(t.string),
  readme: t.maybeNull(t.string),
  language: t.maybeNull(t.string),

  author: t.maybeNull(User),

  repoLink: t.maybeNull(t.string),
  producer: t.maybeNull(t.string),
  producerLink: t.maybeNull(t.string),

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
