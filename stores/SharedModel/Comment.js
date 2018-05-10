import { types as t } from 'mobx-state-tree'
import { User } from './User'

const CommentBrief = t.model('CommentBrief', {
  id: t.maybe(t.string),
  body: t.maybe(t.string),
  floor: t.maybe(t.number),
  author: t.optional(User, {}),
})

const Comment = t.model('Comment', {
  id: t.maybe(t.string),
  body: t.maybe(t.string),
  author: t.optional(User, {}),
  floor: t.number,
  replyTo: t.maybe(CommentBrief),
  replies: t.optional(t.array(CommentBrief), []),
  contributesDigest: t.optional(t.array(t.number), []),
  repliesCount: t.optional(t.number, 0),
  likesCount: t.optional(t.number, 0),
  dislikesCount: t.optional(t.number, 0),
  viewerHasLiked: t.maybe(t.boolean),
  viewerHasDisliked: t.maybe(t.boolean),
  insertedAt: t.optional(t.string, ''),
  updatedAt: t.optional(t.string, ''),
})

export default Comment
