/*
 *
 * Sidebar
 *
 */

import React from 'react'
import { filter, propEq } from 'ramda'

import { HCN, ANCHOR } from '@/constant'
import { pluggedIn, buildLog } from '@/utils'

import Header from './Header'
import MenuList from './MenuList/index'
import MenuBar from './MenuList/MenuBar'
import Footer from './Footer'

import { MainWrapper } from './styles'
import { useInit, onSortMenuEnd } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:Sidebar:index')

const SidebarContainer = ({ sidebar: store }) => {
  useInit(store)

  const {
    curCommunity,
    pin,
    searchCommunityValue,
    sortOptActive,
    communitiesData,
    forceRerender,
    isPulled,
  } = store

  // onMouseLeave={logic.leaveSidebar}
  // onMouseLeave is not unreliable in chrome: https://github.com/facebook/react/issues/4492
  const activeRaw = curCommunity.raw
  const homeCommunity = filter(propEq('raw', HCN), communitiesData)[0]

  return (
    <MainWrapper
      testid="sidebar"
      pin={pin}
      className={ANCHOR.GLOBAL_BLUR_CLASS}
      isPulled={isPulled}
    >
      <Header pin={pin} searchCommunityValue={searchCommunityValue} />
      {/* move home community out of menulist to avoid rerender */}
      <MenuBar pin={pin} item={homeCommunity} activeRaw={activeRaw} />

      <MenuList
        items={communitiesData}
        pin={pin}
        sortOptActive={sortOptActive}
        forceRerender={forceRerender}
        activeRaw={activeRaw}
        onSortEnd={onSortMenuEnd}
        distance={5}
      />
      {pin && <Footer pin={pin} sortOptActive={sortOptActive} />}
    </MainWrapper>
  )
}

export default pluggedIn(SidebarContainer)
