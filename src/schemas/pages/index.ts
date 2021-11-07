import { pagedPosts, pagedPublishedPosts, post } from './post'
import { pagedJobs, job, pagedPublishedJobs } from './job'
import { pagedRadars, radar, pagedPublishedRadars } from './radar'
import { pagedBlogs, blog, blogRssInfo, pagedPublishedBlogs } from './blog'
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
  pagedPublishedPosts,
  post,
  // job
  pagedJobs,
  pagedPublishedJobs,
  job,
  // blog
  pagedBlogs,
  pagedPublishedBlogs,
  blog,
  blogRssInfo,
  // radar
  pagedRadars,
  pagedPublishedRadars,
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
