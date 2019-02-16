/*
 *
 * Sidebar
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { makeDebugger, storePlug } from 'utils'
import { Container } from './styles'

import Header from './Header'
import MenuList from './MenuList'

import * as logic from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:Sidebar:index')

class SidebarContainer extends React.Component {
  componentDidMount() {
    const { sidebar } = this.props
    logic.init(sidebar)

    setTimeout(() => {
      /* eslint-disable-next-line */
      logic.toggleForeceRerender(true)
    }, 1000)
  }

  componentWillUnmount() {
    logic.uninit()
  }

  render() {
    const { sidebar } = this.props
    const { curCommunity, pin, communitiesData, forceRerender } = sidebar
    //    onMouseLeave={logic.leaveSidebar}
    // onMouseLeave is not unreliable in chrome: https://github.com/facebook/react/issues/4492
    const activeRaw = curCommunity.raw

    return (
      <Container pin={pin}>
        <Header pin={pin} />
        <MenuList
          items={communitiesData}
          pin={pin}
          forceRerender={forceRerender}
          activeRaw={activeRaw}
          onSortEnd={logic.onSortMenuEnd}
          distance={5}
        />
      </Container>
    )
  }
}

export default inject(storePlug('sidebar'))(observer(SidebarContainer))
