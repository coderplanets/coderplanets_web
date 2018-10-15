/*
 *
 * NOTE: well, this is not real GraphQL-Fragments, just some comment pices
 * used across the containers / pages, it's enoungh for now
 *
 * the reason is graphql-request semms not support gql`` tag , which is used
 * by fragment staff, it hurt me so bad
 *
 */

import { communityFragment, partialTagsFragment } from './general'
import {
  pagedPostsFragment,
  pagedJobsFragment,
  pagedVideosFragment,
  pagedReposFragment,
} from './paged'

export const F = {
  pagedPosts: `${pagedPostsFragment}`,
  pagedJobs: `${pagedJobsFragment}`,
  pagedVideos: `${pagedVideosFragment}`,
  pagedRepos: `${pagedReposFragment}`,
}

export const S = {
  community: `
    query community($id: ID, $raw: String) {
      community(id: $id, raw: $raw) {
        ${communityFragment}
      }
    }
  `,
  partialTags: `
    query($communityId: ID, $community: String, $thread: CmsThread!) {
      partialTags(communityId: $communityId, community: $community, thread: $thread) {
        ${partialTagsFragment}
      }
    }
  `,
  pagedPosts: `
    query($filter: PagedArticleFilter) {
      pagedPosts(filter: $filter) {
        ${pagedPostsFragment}
      }
    }
  `,
  pagedJobs: `
    query($filter: PagedArticleFilter) {
      pagedJobs(filter: $filter) {
        ${pagedJobsFragment}
      }
    }
  `,
  pagedVideos: `
    query($filter: PagedArticleFilter) {
      pagedVideos(filter: $filter) {
        ${pagedVideosFragment}
      }
    }
  `,
  pagedRepos: `
    query($filter: PagedArticleFilter) {
      pagedRepos(filter: $filter) {
        ${pagedReposFragment}
      }
    }
  `,
}
