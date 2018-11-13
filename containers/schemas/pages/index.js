import F from '../fragments'

import { pagedPosts, post } from './post'
import { pagedJobs, job } from './job'
import { pagedVideos, video } from './video'
import { pagedRepos, repo } from './repo'
import { user } from './user'
import { community, subscribedCommunities } from './community'

const P = {
  community,
  subscribedCommunities,

  partialTags: `
    query($communityId: ID, $community: String, $thread: CmsThread!, $topic: String) {
      partialTags(communityId: $communityId, community: $community, thread: $thread, topic: $topic) {
        ${F.tag}
      }
    }
  `,
  // post
  pagedPosts,
  post,
  // job
  pagedJobs,
  job,
  // video
  pagedVideos,
  video,
  // repo
  pagedRepos,
  repo,
  // user
  user,
}

export default P
