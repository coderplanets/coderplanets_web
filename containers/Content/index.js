/*
 *
 * Content
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { makeDebugger, storePlug, ROUTE } from '@utils'

import CommunityContent from '@containers/CommunityContent'
import CommunitiesContent from '@containers/CommunitiesContent'
import CheatSheetContent from '@containers/CheatSheetContent'
import UserContent from '@containers/UserContent'

import { Wrapper } from './styles'

import * as logic from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:Content')

const renderContent = curRoute => {
  const { mainPath } = curRoute
  switch (mainPath) {
    case ROUTE.CHEATSHEETS:
      return <CheatSheetContent />

    case ROUTE.COMMUNITIES:
      return <CommunitiesContent />

    case ROUTE.USER:
      return <UserContent />

    default:
      return <CommunityContent />
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
