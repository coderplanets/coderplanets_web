import { types as T } from 'mobx-state-tree'

// import { User, PagedUsers } from './User'
import { User } from './User'
import { Community } from './Community'
import { Comment } from './Comment'
import { Tag } from './Tag'

export const timestampFields = () => {
  return {
    insertedAt: T.optional(T.string, ''),
    updatedAt: T.optional(T.string, ''),
  }
}

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
    views: T.optional(T.number, 0),
    isPinned: T.maybeNull(T.boolean),

    collectsCount: T.optional(T.number, 0),
    upvotesCount: T.optional(T.number, 0),

    ...timestampFields(),
  }
}
