import { types as T } from 'mobx-state-tree'

import { PAGE_SIZE } from '@/config'
import { User } from './User'
import { Community } from './Community'

const CommentBrief = T.model('CommentBrief', {
  id: T.maybeNull(T.string),
  body: T.maybeNull(T.string),
  floor: T.maybeNull(T.number),
  author: T.optional(User, {}),
})

const CommentBase = {
  id: T.maybeNull(T.string),
  body: T.maybeNull(T.string),
  author: T.optional(User, {}),
  floor: T.number,
  replyTo: T.maybeNull(CommentBrief),
  replies: T.optional(T.array(CommentBrief), []),
  repliesCount: T.optional(T.number, 0),
  likesCount: T.optional(T.number, 0),
  dislikesCount: T.optional(T.number, 0),
  viewerHasLiked: T.maybeNull(T.boolean),
  viewerHasDisliked: T.maybeNull(T.boolean),
  insertedAt: T.optional(T.string, ''),
  updatedAt: T.optional(T.string, ''),
}

export const Comment = T.model('Comment', {
  ...CommentBase,
})

export const PagedComments = T.model('PagedComments', {
  entries: T.optional(T.array(Comment), []),
  pageNumber: T.optional(T.number, 1),
  pageSize: T.optional(T.number, PAGE_SIZE.D),
  totalCount: T.optional(T.number, 0),
  totalPages: T.optional(T.number, 0),
})

// paged post comemnts
const PostBrief = T.model('PostBrief', {
  id: T.maybeNull(T.string),
  title: T.maybeNull(T.string),
  body: T.maybeNull(T.string),
  digest: T.maybeNull(T.string),
  // author: T.optional(User, {}),
  author: T.maybeNull(User),
  commentsCount: T.maybeNull(T.number),
  communities: T.optional(T.array(Community), []),
  origialCommunity: T.optional(Community, {}),
})

const PostComment = T.model('PostComment', {
  ...CommentBase,
  post: T.optional(PostBrief, {}),
})
export const PagedPostComments = T.model('PagedPostComment', {
  entries: T.optional(T.array(PostComment), []),
  pageNumber: T.optional(T.number, 1),
  pageSize: T.optional(T.number, PAGE_SIZE.D),
  totalCount: T.optional(T.number, 0),
  totalPages: T.optional(T.number, 0),
})

// paged jobs comemnts
const JobBrief = T.model('JobBrief', {
  id: T.maybeNull(T.string),
  title: T.maybeNull(T.string),
  body: T.maybeNull(T.string),
  company: T.maybeNull(T.string),
  // author: T.optional(User, {}),
  author: T.maybeNull(User),
  commentsCount: T.maybeNull(T.number),
  communities: T.optional(T.array(Community), []),
  origialCommunity: T.optional(Community, {}),
})

const JobComment = T.model('JobComment', {
  ...CommentBase,
  job: T.optional(JobBrief, {}),
})
export const PagedJobComments = T.model('PagedJobComment', {
  entries: T.optional(T.array(JobComment), []),
  pageNumber: T.optional(T.number, 1),
  pageSize: T.optional(T.number, PAGE_SIZE.D),
  totalCount: T.optional(T.number, 0),
  totalPages: T.optional(T.number, 0),
})

// paged videos comemnts
const VideoBrief = T.model('VideoBrief', {
  id: T.maybeNull(T.string),
  title: T.maybeNull(T.string),
  author: T.maybeNull(User),
  commentsCount: T.maybeNull(T.number),
  communities: T.optional(T.array(Community), []),
  origialCommunity: T.optional(Community, {}),
})

const VideoComment = T.model('VideoComment', {
  ...CommentBase,
  video: T.optional(VideoBrief, {}),
})
export const PagedVideoComments = T.model('PagedVideoComment', {
  entries: T.optional(T.array(VideoComment), []),
  pageNumber: T.optional(T.number, 1),
  pageSize: T.optional(T.number, PAGE_SIZE.D),
  totalCount: T.optional(T.number, 0),
  totalPages: T.optional(T.number, 0),
})

// paged repos comemnts
const RepoBrief = T.model('RepoBrief', {
  id: T.maybeNull(T.string),
  title: T.maybeNull(T.string),
  ownerName: T.maybeNull(T.string),
  ownerUrl: T.maybeNull(T.string),
  repoUrl: T.maybeNull(T.string),
  commentsCount: T.maybeNull(T.number),
  communities: T.optional(T.array(Community), []),
  origialCommunity: T.optional(Community, {}),
})

const RepoComment = T.model('RepoComment', {
  ...CommentBase,
  repo: T.optional(RepoBrief, {}),
})
export const PagedRepoComments = T.model('PagedRepoComment', {
  entries: T.optional(T.array(RepoComment), []),
  pageNumber: T.optional(T.number, 1),
  pageSize: T.optional(T.number, PAGE_SIZE.D),
  totalCount: T.optional(T.number, 0),
  totalPages: T.optional(T.number, 0),
})
