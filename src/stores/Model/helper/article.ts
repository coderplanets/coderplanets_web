import { types as T } from 'mobx-state-tree'

import { THREAD } from '@/constant'
import { User, SimpleUser, PagedUsers } from '../User'
import { Community } from '../Community'
import { Comment } from '../Comment'
import { Tag } from '../Tag'

const ArticleMeta = T.model('ArticleMeta', {
  thread: T.optional(T.string, THREAD.POST),
  isEdited: T.optional(T.boolean, false),
  isCommentLocked: T.optional(T.boolean, false),
  lastActiveAt: T.optional(T.string, ''),
  citingCount: T.optional(T.number, 0),
  latestUpvotedUsers: T.optional(T.array(SimpleUser), []),
  isLegal: T.optional(T.boolean, true),
  illegalReason: T.optional(T.array(T.string), []),
  illegalWords: T.optional(T.array(T.string), []),
})

export const Document = T.model('ArticleMeta', {
  bodyHtml: T.optional(T.string, ''),
  body: T.maybeNull(T.string),
  // toc:
  // body
})

/**
 * common article fields for post/job/blog/radar/works ...
 */
export const articleFields = () => {
  return {
    id: T.maybeNull(T.string),
    title: T.optional(T.string, ''),
    document: T.optional(Document, {}),
    digest: T.maybeNull(T.string),
    author: T.maybeNull(User),

    // meta: T.optional(ArticleMeta, {}),
    meta: T.maybeNull(ArticleMeta),

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

    insertedAt: T.optional(T.string, ''),
    updatedAt: T.optional(T.string, ''),
    // activeAt: T.optional(T.string, ''),
    activeAt: T.maybeNull(T.string),

    isArchived: T.optional(T.boolean, false),
    archivedAt: T.maybeNull(T.string),
  }
}

export const holder = 1
