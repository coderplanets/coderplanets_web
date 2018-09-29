/*
 *
 * CommunityContent
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import PostsThread from '../../containers/PostsThread'
import VideosThread from '../../containers/VideosThread'
import ReposThread from '../../containers/ReposThread'
import WikiThread from '../../containers/WikiThread'
import JobsThread from '../../containers/JobsThread'
import UsersThread from '../../containers/UsersThread'
import CheatSheetPaper from '../../containers/CheatSheetPaper'

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
    case ROUTE.REPOS: {
      return <ReposThread />
    }
    case ROUTE.USERS: {
      return <UsersThread />
    }
    case ROUTE.VIDEOS: {
      return <VideosThread />
    }
    case ROUTE.JOBS: {
      return <JobsThread />
    }
    case ROUTE.WIKI: {
      return <WikiThread />
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
