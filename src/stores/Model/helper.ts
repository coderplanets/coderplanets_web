import { types as T } from 'mobx-state-tree'

import { PAGE_SIZE } from '@/config'
import { User, PagedUsers } from './User'
import { Community } from './Community'
import { Comment } from './Comment'
import { Tag } from './Tag'

export const timestampFields = () => {
  return {
    insertedAt: T.optional(T.string, ''),
    updatedAt: T.optional(T.string, ''),
  }
}

/**
 * common article fields for post/job/blog/radar/works ...
 */
export const articleFields = () => {
  return {
    id: T.maybeNull(T.string),
    title: T.optional(T.string, ''),
    body: T.maybeNull(T.string),
    digest: T.maybeNull(T.string),
    author: T.maybeNull(User),

    linkAddr: T.maybeNull(T.string),
    copyRight: T.maybeNull(T.string),

    communities: T.optional(T.array(Community), []),
    originalCommunity: T.optional(Community, {}),
    articleTags: T.optional(T.array(Tag), []),
    comments: T.optional(T.array(Comment), []),

    commentsCount: T.optional(T.number, 0),
    commentsParticipantsCount: T.optional(T.number, 0),
    commentsParticipants: T.optional(T.array(User), []),

    pagedCommentsParticipators: T.optional(PagedUsers, {}),

    views: T.optional(T.number, 0),
    isPinned: T.maybeNull(T.boolean),

    collectsCount: T.optional(T.number, 0),
    upvotesCount: T.optional(T.number, 0),

    viewerHasCollected: T.optional(T.boolean, false),
    viewerHasUpvoted: T.optional(T.boolean, false),

    viewerHasViewed: T.optional(T.boolean, false),

    // TODO:
    favoritedCategoryId: T.maybeNull(T.string),

    ...timestampFields(),
  }
}

export const pagiFields = () => {
  return {
    pageNumber: T.optional(T.number, 1),
    pageSize: T.optional(T.number, PAGE_SIZE.D),
    totalCount: T.optional(T.number, 0),
    totalPages: T.optional(T.number, 0),
  }
}
