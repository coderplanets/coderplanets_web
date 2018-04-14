/*
 *
 * CommunityContent
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import PostsPaper from '../../containers/PostsPaper'
// TODO: rename to CheatSheetPapser
import CheatSheetViewer from '../../containers/CheatSheetViewer'
import MapViewer from '../../containers/MapViewer'
// import TutsViewer from '../TutsViewer'
// import JobsViewer from '../JobsViewer'

import { makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:CommunityContent:index')
/* eslint-enable no-unused-vars */

const ComunityContent = ({ curRoute }) => {
  const { subQuery } = curRoute
  debug('subQuery: ', subQuery)

  switch (subQuery) {
    case 'posts': {
      return <PostsPaper />
    }
    case 'news': {
      return <PostsPaper />
    }
    case 'tuts': {
      return <PostsPaper />
    }
    case 'map': {
      return <MapViewer />
    }
    case 'meetups': {
      return <PostsPaper />
    }
    case 'users': {
      return <div>users</div>
    }
    case 'videos': {
      return <PostsPaper />
    }
    case 'jobs': {
      return <PostsPaper />
    }
    case 'cheatsheet': {
      return <CheatSheetViewer />
    }
    default: {
      return <div>posts</div>
    }
  }
}

const CommunityContent = ({ curRoute }) => {
  return (
    <div>
      <ComunityContent curRoute={curRoute} />
    </div>
  )
}

CommunityContent.propTypes = {
  // https://www.npmjs.com/package/prop-types
  curRoute: PropTypes.object.isRequired,
}

CommunityContent.defaultProps = {}

export default CommunityContent
