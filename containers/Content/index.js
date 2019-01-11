/*
 *
 * Content
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import CommunityContent from '../CommunityContent'
import CommunitiesContent from '../CommunitiesContent'
import CheatSheetContent from '../CheatSheetContent'
import UserContent from '../UserContent'

import { Wrapper } from './styles'

import { makeDebugger, storePlug, ROUTE } from '../../utils'
import * as logic from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:Content')

const renderContent = curRoute => {
  const { mainPath } = curRoute
  switch (mainPath) {
    case ROUTE.CHEATSHEETS: {
      return <CheatSheetContent />
    }
    case ROUTE.COMMUNITIES: {
      return <CommunitiesContent />
    }
    case ROUTE.USER: {
      return <UserContent />
    }
    default: {
      return <CommunityContent />
    }
  }
}

class ContentContainer extends React.Component {
  constructor(props) {
    super(props)

    const { content } = props
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
