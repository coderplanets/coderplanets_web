import { types as T } from 'mobx-state-tree'

import { PAGE_SIZE } from '@/config'

import { User, PagedUsers } from './User'
import { Community } from './Community'
import { Tag } from './Tag'

const Contributor = T.model('Contributor', {
  avatar: T.string,
  nickname: T.string,
  htmlUrl: T.string,
})

const Language = T.model('Language', {
  name: T.string,
  color: T.string,
})

export const Repo = T.model('Reop', {
  id: T.maybeNull(T.string),
  title: T.optional(T.string, ''),
  ownerName: T.maybeNull(T.string),
  ownerUrl: T.maybeNull(T.string),
  repoUrl: T.maybeNull(T.string),

  desc: T.maybeNull(T.string),
  homepageUrl: T.maybeNull(T.string),
  readme: T.maybeNull(T.string),

  issuesCount: T.optional(T.number, 0),
  prsCount: T.optional(T.number, 0),
  starCount: T.optional(T.number, 0),
  forkCount: T.optional(T.number, 0),
  watchCount: T.optional(T.number, 0),

  primaryLanguage: T.optional(Language, { name: '', color: 'grey' }),
  license: T.maybeNull(T.string),
  releaseTag: T.maybeNull(T.string),
  contributors: T.array(Contributor),

  author: T.maybeNull(User),
  views: T.optional(T.number, 0),
  isPinned: T.maybeNull(T.boolean),

  collectsCount: T.optional(T.number, 0),
  viewerHasCollected: T.optional(T.boolean, false),
  favoritedCategoryId: T.maybeNull(T.string),

  communities: T.optional(T.array(Community), []),
  originalCommunity: T.optional(Community, {}),
  articleTags: T.optional(T.array(Tag), []),

  lastSync: T.maybeNull(T.string),
  pagedCommentsParticipators: T.optional(PagedUsers, {}),

  viewerHasViewed: T.optional(T.boolean, false),

  insertedAt: T.optional(T.string, ''),
  updatedAt: T.optional(T.string, ''),
})

export const PagedRepos = T.model('PagedRepos', {
  entries: T.optional(T.array(Repo), []),
  pageNumber: T.optional(T.number, 1),
  pageSize: T.optional(T.number, PAGE_SIZE.D),
  totalCount: T.optional(T.number, 0),
  totalPages: T.optional(T.number, 0),
})
