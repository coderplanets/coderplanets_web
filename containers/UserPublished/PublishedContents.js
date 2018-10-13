import React from 'react'

// import { Wrapper } from './styles'
import PublishedPosts from './PublishedPosts'
import PublishedJobs from './PublishedJobs'
import PublishedVideos from './PublishedVideos'
import PublishedRepos from './PublishedRepos'

import { THREAD } from '../../utils'

const PublishedContents = ({ thread, curView, entries }) => {
  switch (thread) {
    case THREAD.JOB: {
      return <PublishedJobs entries={entries} curView={curView} />
    }
    case THREAD.VIDEO: {
      return <PublishedVideos entries={entries} curView={curView} />
    }
    case THREAD.REPO: {
      return <PublishedRepos entries={entries} curView={curView} />
    }
    default: {
      return <PublishedPosts entries={entries} curView={curView} />
    }
  }
}

export default PublishedContents
