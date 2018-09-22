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
