/*
 *
 * Content
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { makeDebugger, storePlug, ROUTE } from '../../utils'

import CheatSheetContent from '../CheatSheetContent'
import CommunityContent from '../../components/CommunityContent'
import { CommunitiesContent, PostContent, UserContent } from '..'

import * as logic from './logic'

import { Wrapper } from './styles'

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
    const {
      content: { curRoute },
    } = this.props
    //    debug('curRoute: ', curRoute)
    return <Wrapper>{renderContent(curRoute)}</Wrapper>
  }
}

export default inject(storePlug('content'))(observer(ContentContainer))
