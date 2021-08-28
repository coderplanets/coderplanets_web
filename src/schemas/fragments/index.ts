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
  author,
  tag,
  user,
  userSocial,
  c11n,
  achievement,
  userBackgrounds,
  userContributes,
  comment,
  commentParent,
  pagedCounts,
} from './base'

import { pagedPosts, pagedJobs, pagedRepos } from './paged'

const F = {
  community,
  article,
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
  commentParent,
  pagedCounts,
}

export default F
