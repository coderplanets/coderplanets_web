/*
 *
 * CommunityContent
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import MapViewer from '../../containers/MapViewer'
import {
  PostsThread,
  VideosThread,
  JobsThread,
  CheatSheetPaper,
} from '../../containers'

import { Wrapper } from './styles'
import { makeDebugger, ROUTE } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:CommunityContent:index')
/* eslint-enable no-unused-vars */

const ComunityContent = ({ curRoute }) => {
  const { subPath } = curRoute
  switch (subPath) {
    case ROUTE.POSTS: {
      return <PostsThread />
    }
    case 'news': {
      return <h2>NesPaper</h2>
    }
    case 'tuts': {
      return <h2>TutsPaper</h2>
    }
    case 'map': {
      return <MapViewer />
    }
    case 'meetups': {
      return <h2>MeetupPaper</h2>
    }
    case 'users': {
      return <h2>UsersPaper</h2>
    }
    case ROUTE.VIDEOS: {
      return <VideosThread />
    }
    case ROUTE.JOBS: {
      return <JobsThread />
    }
    case 'cheatsheet': {
      return <CheatSheetPaper />
    }
    default: {
      return <div>default</div>
    }
  }
}

const CommunityContent = ({ curRoute }) => {
  return (
    <Wrapper>
      <ComunityContent curRoute={curRoute} />
    </Wrapper>
  )
}

CommunityContent.propTypes = {
  // https://www.npmjs.com/package/prop-types
  curRoute: PropTypes.object.isRequired,
}

CommunityContent.defaultProps = {}

export default CommunityContent
