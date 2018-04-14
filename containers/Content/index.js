/*
 *
 * Content
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { makeDebugger, storeSelector } from '../../utils'

import CommunitiesContent from '../CommunitiesContent'
import CheatSheetContent from '../CheatSheetContent'
import CommunityContent from '../../components/CommunityContent'

import * as logic from './logic'

import { Wrapper } from './styles'

const debug = makeDebugger('C:Content')

const renderContent = curRoute => {
  const { mainQuery } = curRoute

  debug('curRoute: ', curRoute)
  switch (mainQuery) {
    case 'cheatsheet': {
      return <CheatSheetContent />
    }
    case 'communities': {
      return <CommunitiesContent />
    }
    default: {
      return <CommunityContent curRoute={curRoute} />
    }
  }
}

class ContentContainer extends React.Component {
  componentWillMount() {
    debug('mount')
    logic.init(this.props.content)
  }

  render() {
    const { curRoute } = this.props.content
    //    debug('curRoute: ', curRoute)
    return <Wrapper>{renderContent(curRoute)}</Wrapper>
  }
}

export default inject(storeSelector('content'))(observer(ContentContainer))
