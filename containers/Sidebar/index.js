/*
 *
 * Sidebar
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { Container } from './styles'

import Header from './Header'
import MenuList from './MenuList'

import { makeDebugger, storePlug } from '../../utils'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:Sidebar:index')
/* eslint-enable no-unused-vars */

class SidebarContainer extends React.Component {
  componentDidMount() {
    const { sidebar } = this.props
    logic.init(sidebar)
  }

  render() {
    const { sidebar } = this.props
    const { curCommunity, pin, communitiesData } = sidebar
    //    onMouseLeave={logic.leaveSidebar}
    // onMouseLeave is not unreliable in chrome: https://github.com/facebook/react/issues/4492
    const activeRaw = curCommunity.raw

    debug('communitiesData ', communitiesData)

    return (
      <Container pin={pin}>
        <Header pin={pin} />
        <MenuList
          items={communitiesData}
          pin={pin}
          activeRaw={activeRaw}
          onSortEnd={logic.onSortMenuEnd}
          distance={5}
        />
      </Container>
    )
  }
}

export default inject(storePlug('sidebar'))(observer(SidebarContainer))
