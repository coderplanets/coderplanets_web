/*
 *
 * Sidebar
 *
 */

import React from 'react'

import { connectStore, makeDebugger } from '@utils'

import Header from './Header'
import MenuList from './MenuList'

import { Wrapper } from './styles'
import { useInit, onSortMenuEnd } from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:Sidebar:index')

const SidebarContainer = ({ sidebar }) => {
  useInit(sidebar)

  const { curCommunity, pin, communitiesData, forceRerender } = sidebar

  // onMouseLeave={logic.leaveSidebar}
  // onMouseLeave is not unreliable in chrome: https://github.com/facebook/react/issues/4492
  const activeRaw = curCommunity.raw

  return (
    <Wrapper pin={pin} testid="sidebar">
      <Header pin={pin} />
      <MenuList
        items={communitiesData}
        pin={pin}
        forceRerender={forceRerender}
        activeRaw={activeRaw}
        onSortEnd={onSortMenuEnd}
        distance={5}
      />
    </Wrapper>
  )
}

export default connectStore(SidebarContainer)
