/*
 *
 * Sidebar
 *
 */

import React from 'react'

import { connectStore, buildLog } from '@utils'

import Header from './Header'
import MenuList from './MenuList'
import Footer from './Footer'

import { Wrapper } from './styles'
import { useInit, onSortMenuEnd } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:Sidebar:index')

const SidebarContainer = ({ sidebar }) => {
  useInit(sidebar)

  const {
    curCommunity,
    pin,
    searchCommunityValue,
    showHeaderShadow,
    showFooterShadow,
    communitiesData,
    forceRerender,
  } = sidebar

  // onMouseLeave={logic.leaveSidebar}
  // onMouseLeave is not unreliable in chrome: https://github.com/facebook/react/issues/4492
  const activeRaw = curCommunity.raw

  return (
    <Wrapper pin={pin} testid="sidebar">
      <Header pin={pin} searchCommunityValue={searchCommunityValue} />
      <MenuList
        items={communitiesData}
        pin={pin}
        showHeaderShadow={showHeaderShadow}
        forceRerender={forceRerender}
        activeRaw={activeRaw}
        onSortEnd={onSortMenuEnd}
        distance={5}
      />
      <Footer pin={pin} showFooterShadow={showFooterShadow} />
    </Wrapper>
  )
}

export default connectStore(SidebarContainer)
