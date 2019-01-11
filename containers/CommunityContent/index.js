/*
 *
 * CommunityContent
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import PostsThread from '../PostsThread'
import VideosThread from '../VideosThread'
import ReposThread from '../ReposThread'
import WikiThread from '../WikiThread'
import JobsThread from '../JobsThread'
import UsersThread from '../UsersThread'
import CheatsheetThread from '../CheatsheetThread'

import { Wrapper } from './styles'

import { makeDebugger, storePlug, ROUTE } from '../../utils'
import * as logic from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:CommunityContent')

const ComunityContent = ({ curRoute }) => {
  const { subPath } = curRoute
  switch (subPath) {
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
    case ROUTE.CHEATSHEET: {
      return <CheatsheetThread />
    }
    default: {
      return <PostsThread />
    }
  }
}

class CommunityContentContainer extends React.Component {
  componentDidMount() {
    const { communityContent } = this.props
    logic.init(communityContent)
  }

  componentWillUnmount() {
    logic.uninit()
  }

  render() {
    const { communityContent } = this.props
    const { curRoute } = communityContent

    return (
      <Wrapper>
        <ComunityContent curRoute={curRoute} />
      </Wrapper>
    )
  }
}

export default inject(storePlug('communityContent'))(
  observer(CommunityContentContainer)
)
