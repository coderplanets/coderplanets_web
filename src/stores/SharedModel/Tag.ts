import { values } from 'ramda'
import { types as T } from 'mobx-state-tree'

import { TAG_COLORS, PAGE_SIZE } from '@/config'
import { THREAD } from '@/constant'

import { Community } from './Community'

export const Tag = T.model('Tag', {
  title: T.maybeNull(T.string),
  raw: T.maybeNull(T.string),
  color: T.optional(T.enumeration('color', TAG_COLORS), TAG_COLORS[0]),
  thread: T.optional(
    T.enumeration(
      'thread',
      values(THREAD).map((t) => t.toUpperCase()),
    ),
    THREAD.POST.toUpperCase(),
  ),
  group: T.maybeNull(T.string),
  community: T.maybeNull(Community),
  insertedAt: T.optional(T.string, ''),
  updatedAt: T.optional(T.string, ''),
})

export const PagedTags = T.model('PagedTags', {
  entries: T.optional(T.array(Tag), []),
  pageNumber: T.optional(T.number, 1),
  pageSize: T.optional(T.number, PAGE_SIZE.D),
  totalCount: T.optional(T.number, 0),
  totalPages: T.optional(T.number, 0),
})

export const emptyTag = { id: '', title: '', color: '', raw: '' }
