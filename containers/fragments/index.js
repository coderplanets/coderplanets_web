/*
 *
 * NOTE: well, this is not real GraphQL-Fragments, just some comment pices
 * used across the containers / pages, it's enoungh for now
 *
 * the reason is graphql-request semms not support gql`` tag , which is used
 * by fragment staff, it hurt me so bad
 *
 */

import { community, partialTags, comment, commentParent } from './general'

import {
  pagedPosts,
  pagedJobs,
  pagedVideos,
  pagedRepos,
  pagedCounts,
} from './paged'

export const F = {
  pagedPosts,
  pagedJobs,
  pagedVideos,
  pagedRepos,
  pagedCounts,
  comment,
  commentParent,
}

export const S = {
  community: `
    query community($id: ID, $raw: String) {
      community(id: $id, raw: $raw) {
        ${community}
      }
    }
  `,
  partialTags: `
    query($communityId: ID, $community: String, $thread: CmsThread!) {
      partialTags(communityId: $communityId, community: $community, thread: $thread) {
        ${partialTags}
      }
    }
  `,
  pagedPosts: `
    query($filter: PagedArticleFilter) {
      pagedPosts(filter: $filter) {
        ${pagedPosts}
      }
    }
  `,
  pagedJobs: `
    query($filter: PagedArticleFilter) {
      pagedJobs(filter: $filter) {
        ${pagedJobs}
      }
    }
  `,
  pagedVideos: `
    query($filter: PagedArticleFilter) {
      pagedVideos(filter: $filter) {
        ${pagedVideos}
      }
    }
  `,
  pagedRepos: `
    query($filter: PagedArticleFilter) {
      pagedRepos(filter: $filter) {
        ${pagedRepos}
      }
    }
  `,
}
