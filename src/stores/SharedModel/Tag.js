import R from 'ramda'
import { types as t } from 'mobx-state-tree'

import { TAG_COLORS, PAGE_SIZE } from '@config'
import { THREAD } from '@constant'

import { Community } from './Community'

export const Topic = t.model('Topic', {
  id: t.maybeNull(t.string),
  raw: t.maybeNull(t.string),
})

export const Tag = t.model('Tag', {
  id: t.maybeNull(t.string),
  title: t.maybeNull(t.string),
  color: t.optional(t.enumeration('color', TAG_COLORS), TAG_COLORS[0]),
  topic: t.maybeNull(Topic),
  /* thread: t.optional(t.enumeration('thread', R.values(THREAD)), THREAD.POST), */
  thread: t.optional(t.enumeration('thread', R.values(THREAD)), THREAD.POST),
  community: t.maybeNull(Community),
  insertedAt: t.optional(t.string, ''),
  updatedAt: t.optional(t.string, ''),
})

export const PagedTags = t.model('PagedTags', {
  entries: t.optional(t.array(Tag), []),
  pageNumber: t.optional(t.number, 1),
  pageSize: t.optional(t.number, PAGE_SIZE.D),
  totalCount: t.optional(t.number, 0),
  totalPages: t.optional(t.number, 0),
})
