import React from 'react'

// import { Wrapper } from './styles'
import PublishedPosts from './PublishedPosts'

import { THREAD } from '../../utils'

const PublishedContents = ({ thread, curView, entries }) => {
  switch (thread) {
    case THREAD.POST: {
      return <PublishedPosts entries={entries} curView={curView} />
    }
    default: {
      return <h3>other published contents</h3>
    }
  }
}

export default PublishedContents
