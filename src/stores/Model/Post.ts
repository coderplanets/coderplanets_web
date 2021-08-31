import { types as T } from 'mobx-state-tree'

import { PAGE_SIZE } from '@/config'

import { articleFields } from './helper'
import { PagedUsers } from './User'

export const Post = T.model('Post', {
  ...articleFields(),

  length: T.optional(T.number, 0),
  viewerHasCollected: T.optional(T.boolean, false),
  viewerHasUpvoted: T.optional(T.boolean, false),
  favoritedCategoryId: T.maybeNull(T.string),

  pagedCommentsParticipators: T.optional(PagedUsers, {}),

  viewerHasViewed: T.optional(T.boolean, false),
})

export const PagedPosts = T.model('PagedPosts', {
  entries: T.optional(T.array(Post), []),
  pageNumber: T.optional(T.number, 1),
  pageSize: T.optional(T.number, PAGE_SIZE.D),
  totalCount: T.optional(T.number, 0),
  totalPages: T.optional(T.number, 0),
})
