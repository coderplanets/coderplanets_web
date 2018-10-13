import React from 'react'

import PostsList from './PostsList'
import JobsList from './JobsList'
import ReposList from './ReposList'
import VideosList from './VideosList'

import { THREAD } from '../../utils'

const ContentList = ({ entries, curView, community, thread, emptyPrefix }) => {
  switch (thread) {
    case THREAD.JOB: {
      return (
        <JobsList
          entries={entries}
          curView={curView}
          thread={thread}
          community={community}
          emptyPrefix={emptyPrefix}
        />
      )
    }
    case THREAD.VIDEO: {
      return (
        <VideosList
          entries={entries}
          curView={curView}
          thread={thread}
          community={community}
          emptyPrefix={emptyPrefix}
        />
      )
    }
    case THREAD.REPO: {
      return (
        <ReposList
          entries={entries}
          curView={curView}
          thread={thread}
          community={community}
          emptyPrefix={emptyPrefix}
        />
      )
    }
    default: {
      return (
        <PostsList
          entries={entries}
          curView={curView}
          thread={thread}
          community={community}
          emptyPrefix={emptyPrefix}
        />
      )
    }
  }
}

export default ContentList
