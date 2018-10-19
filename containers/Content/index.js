/*
 *
 * Content
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import CommunitiesContent from '../CommunitiesContent'
import CheatSheetContent from '../CheatSheetContent'
import PostContent from '../PostContent'
import JobContent from '../JobContent'
import VideoContent from '../VideoContent'
import RepoContent from '../RepoContent'
import UserContent from '../UserContent'

import CommunityContent from '../../components/CommunityContent'
import { Wrapper } from './styles'

import { makeDebugger, storePlug, ROUTE } from '../../utils'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:Content')
/* eslint-enable no-unused-vars */

const renderContent = curRoute => {
  const { mainPath } = curRoute
  switch (mainPath) {
    case ROUTE.CHEATSHEETS: {
      return <CheatSheetContent />
    }
    case ROUTE.COMMUNITIES: {
      return <CommunitiesContent />
    }
    case ROUTE.POST: {
      return <PostContent />
    }
    case ROUTE.JOB: {
      return <JobContent />
    }
    case ROUTE.VIDEO: {
      return <VideoContent />
    }
    case ROUTE.REPO: {
      return <RepoContent />
    }
    case ROUTE.USER: {
      return <UserContent />
    }
    default: {
      return <CommunityContent curRoute={curRoute} />
    }
  }
}

class ContentContainer extends React.Component {
  componentWillMount() {
    const { content } = this.props
    logic.init(content)
  }

  render() {
    const { content } = this.props
    const { curRoute } = content

    //    debug('curRoute: ', curRoute)
    return <Wrapper>{renderContent(curRoute)}</Wrapper>
  }
}

export default inject(storePlug('content'))(observer(ContentContainer))
