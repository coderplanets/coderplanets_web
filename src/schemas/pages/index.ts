import { pagedPosts, post } from './post'
import { pagedJobs, job } from './job'
import { pagedRadars, radar } from './radar'
import { pagedBlogs, blog } from './blog'
import { pagedRepos, repo } from './repo'
import { user, sessionState } from './user'
import { community, subscribedCommunities, pagedCommunities } from './community'
import { pagedComments } from './comment'
import { pagedCategories, pagedArticleTags } from './misc'
import { mentions } from './mail'

import {
  reaction,
  undoReaction,
  setTag,
  unsetTag,
  follow,
  undoFollow,
} from './action'

const P = {
  // community
  community,
  subscribedCommunities,
  pagedCommunities,
  // comment
  pagedComments,
  // misc
  pagedCategories,
  pagedArticleTags,
  // post
  pagedPosts,
  post,
  // job
  pagedJobs,
  job,
  // blog
  pagedBlogs,
  blog,
  // radar
  pagedRadars,
  radar,
  // repo
  pagedRepos,
  repo,
  // user
  user,
  sessionState,
  // action
  // mentions
  mentions,
  reaction,
  undoReaction,
  setTag,
  unsetTag,
  follow,
  undoFollow,
}

export default P
