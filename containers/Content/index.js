/*
 *
 * Content
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { makeDebugger, storePlug, TYPE } from '../../utils'

import CommunitiesContent from '../CommunitiesContent'
import CheatSheetContent from '../CheatSheetContent'
import CommunityContent from '../../components/CommunityContent'
import { PostContent } from '../../containers'

import * as logic from './logic'

import { Wrapper } from './styles'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:Content')
/* eslint-enable no-unused-vars */

const renderContent = (curRoute, current) => {
  switch (current.type) {
    case TYPE.CHEATSHEET_ROOT_PAGE: {
      return <CheatSheetContent />
    }
    case TYPE.COMMUNITIES_ROOT_PAGE: {
      return <CommunitiesContent />
    }
    case TYPE.POST_PAGE: {
      return <PostContent />
    }
    default: {
      return <CommunityContent curRoute={curRoute} />
    }
  }
}

class ContentContainer extends React.Component {
  componentWillMount() {
    logic.init(this.props.content)
  }

  render() {
    const { curRoute, current } = this.props.content
    //    debug('curRoute: ', curRoute)
    return <Wrapper>{renderContent(curRoute, current)}</Wrapper>
  }
}

export default inject(storePlug('content'))(observer(ContentContainer))
