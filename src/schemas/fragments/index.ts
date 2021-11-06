/*
 *
 * NOTE: well, this is not real GraphQL-Fragments, just some comment pices
 * used across the containers / pages, it's enoungh for now
 *
 * the reason is graphql-request semms not support gql`` tag , which is used
 * by fragment staff, it hurt me so bad
 *
 */

import {
  community,
  article,
  articleDetail,
  pageArticleMeta,
  author,
  tag,
  user,
  userSocial,
  c11n,
  achievement,
  userBackgrounds,
  userContributes,
  comment,
  commentFields,
  emotionQuery,
  commentParent,
  pagi,
  getUpvoteSchema,
  getUndoUpvoteSchema,
} from './base'

import { pagedPosts, pagedJobs, pagedRepos } from './paged'

const F = {
  community,
  article,
  articleDetail,
  pageArticleMeta,
  author,
  tag,
  pagedPosts,
  pagedJobs,
  pagedRepos,

  user,
  userSocial,
  c11n,
  achievement,
  userBackgrounds,
  userContributes,

  comment,
  commentFields,
  emotionQuery,
  commentParent,
  pagi,
  getUpvoteSchema,
  getUndoUpvoteSchema,
}

export default F
