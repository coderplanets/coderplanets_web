/*
 *
 * CommunityContent
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import PostsPaper from '../../containers/PostsPaper'
// TODO: rename to CheatSheetPapser
import CheatSheetPaper from '../../containers/CheatSheetPaper'
import MapViewer from '../../containers/MapViewer'
// import TutsViewer from '../TutsViewer'
// import JobsViewer from '../JobsViewer'

import { makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:CommunityContent:index')
/* eslint-enable no-unused-vars */

const ComunityContent = ({ curRoute }) => {
  const { subPath } = curRoute
  debug('subPath: ', subPath)

  switch (subPath) {
    case 'posts': {
      return <PostsPaper />
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
    case 'videos': {
      return <h2>VideosPaper</h2>
    }
    case 'jobs': {
      return <PostsPaper />
    }
    case 'cheatsheet': {
      return <CheatSheetPaper />
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
