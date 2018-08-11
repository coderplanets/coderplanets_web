import { types as t } from 'mobx-state-tree'
import { TAG_COLORS, CMS_THREADS, PAGE_SIZE } from '../../config'

import { Community } from './Community'

export const Tag = t.model('Tag', {
  id: t.maybeNull(t.string),
  title: t.maybeNull(t.string),
  color: t.optional(t.enumeration('color', TAG_COLORS), TAG_COLORS[0]),
  thread: t.optional(t.enumeration('thread', CMS_THREADS), CMS_THREADS[0]),
  community: t.maybeNull(Community),
  insertedAt: t.optional(t.string, ''),
  updatedAt: t.optional(t.string, ''),
})

export const PagedTags = t.model('PagedTags', {
  entries: t.optional(t.array(Tag), []),
  pageNumber: t.optional(t.number, 1),
  pageSize: t.optional(t.number, PAGE_SIZE.COMMON),
  totalCount: t.optional(t.number, 0),
  totalPages: t.optional(t.number, 0),
})
