import { types as t } from 'mobx-state-tree'

import { PAGE_SIZE } from '../../config'
import { User } from './User'
import { Community } from './Community'

const CommentBrief = t.model('CommentBrief', {
  id: t.maybeNull(t.string),
  body: t.maybeNull(t.string),
  floor: t.maybeNull(t.number),
  author: t.optional(User, {}),
})

const CommentBase = {
  id: t.maybeNull(t.string),
  body: t.maybeNull(t.string),
  author: t.optional(User, {}),
  floor: t.number,
  replyTo: t.maybeNull(CommentBrief),
  replies: t.optional(t.array(CommentBrief), []),
  repliesCount: t.optional(t.number, 0),
  likesCount: t.optional(t.number, 0),
  dislikesCount: t.optional(t.number, 0),
  viewerHasLiked: t.maybeNull(t.boolean),
  viewerHasDisliked: t.maybeNull(t.boolean),
  insertedAt: t.optional(t.string, ''),
  updatedAt: t.optional(t.string, ''),
}

export const Comment = t.model('Comment', {
  ...CommentBase,
})

export const PagedComments = t.model('PagedComments', {
  entries: t.optional(t.array(Comment), []),
  pageNumber: t.optional(t.number, 1),
  pageSize: t.optional(t.number, PAGE_SIZE.D),
  totalCount: t.optional(t.number, 0),
  totalPages: t.optional(t.number, 0),
})

// paged post comemnts
const PostBrief = t.model('PostBrief', {
  id: t.maybeNull(t.string),
  title: t.maybeNull(t.string),
  body: t.maybeNull(t.string),
  digest: t.maybeNull(t.string),
  // author: t.optional(User, {}),
  author: t.maybeNull(User),
  commentsCount: t.maybeNull(t.number),
  communities: t.optional(t.array(Community), []),
})

const PostComment = t.model('PostComment', {
  ...CommentBase,
  post: t.optional(PostBrief, {}),
})
export const PagedPostComments = t.model('PagedPostComment', {
  entries: t.optional(t.array(PostComment), []),
  pageNumber: t.optional(t.number, 1),
  pageSize: t.optional(t.number, PAGE_SIZE.D),
  totalCount: t.optional(t.number, 0),
  totalPages: t.optional(t.number, 0),
})

// paged jobs comemnts
const JobBrief = t.model('JobBrief', {
  id: t.maybeNull(t.string),
  title: t.maybeNull(t.string),
  body: t.maybeNull(t.string),
  company: t.maybeNull(t.string),
  // author: t.optional(User, {}),
  author: t.maybeNull(User),
  commentsCount: t.maybeNull(t.number),
  communities: t.optional(t.array(Community), []),
})

const JobComment = t.model('JobComment', {
  ...CommentBase,
  job: t.optional(JobBrief, {}),
})
export const PagedJobComments = t.model('PagedJobComment', {
  entries: t.optional(t.array(JobComment), []),
  pageNumber: t.optional(t.number, 1),
  pageSize: t.optional(t.number, PAGE_SIZE.D),
  totalCount: t.optional(t.number, 0),
  totalPages: t.optional(t.number, 0),
})

// paged videos comemnts
const VideoBrief = t.model('VideoBrief', {
  id: t.maybeNull(t.string),
  title: t.maybeNull(t.string),
  author: t.maybeNull(User),
  commentsCount: t.maybeNull(t.number),
  communities: t.optional(t.array(Community), []),
})

const VideoComment = t.model('VideoComment', {
  ...CommentBase,
  video: t.optional(VideoBrief, {}),
})
export const PagedVideoComments = t.model('PagedVideoComment', {
  entries: t.optional(t.array(VideoComment), []),
  pageNumber: t.optional(t.number, 1),
  pageSize: t.optional(t.number, PAGE_SIZE.D),
  totalCount: t.optional(t.number, 0),
  totalPages: t.optional(t.number, 0),
})

// paged repos comemnts
const RepoBrief = t.model('RepoBrief', {
  id: t.maybeNull(t.string),
  title: t.maybeNull(t.string),
  ownerName: t.maybeNull(t.string),
  ownerUrl: t.maybeNull(t.string),
  repoUrl: t.maybeNull(t.string),
  commentsCount: t.maybeNull(t.number),
  communities: t.optional(t.array(Community), []),
})

const RepoComment = t.model('RepoComment', {
  ...CommentBase,
  repo: t.optional(RepoBrief, {}),
})
export const PagedRepoComments = t.model('PagedRepoComment', {
  entries: t.optional(t.array(RepoComment), []),
  pageNumber: t.optional(t.number, 1),
  pageSize: t.optional(t.number, PAGE_SIZE.D),
  totalCount: t.optional(t.number, 0),
  totalPages: t.optional(t.number, 0),
})
