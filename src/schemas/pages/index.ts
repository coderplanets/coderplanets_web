import { pagedPosts, post } from './post'
import { pagedJobs, job } from './job'
import { pagedRadars, radar } from './radar'
import { pagedBlogs, blog, blogRssInfo } from './blog'
import { pagedRepos, repo } from './repo'
import { pagedWorks, works } from './works'
import { pagedMeetups, meetup } from './meetup'

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
  blogRssInfo,
  // radar
  pagedRadars,
  radar,
  // repo
  pagedRepos,
  repo,
  // works
  pagedWorks,
  works,
  // meetup
  pagedMeetups,
  meetup,
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
