/*
 *
 * Sidebar
 *
 */

import React from 'react'
import { filter, propEq } from 'ramda'

import { ANCHOR } from '@/constant'
import { connectStore, buildLog } from '@/utils'

import Header from './Header'
import MenuList from './MenuList'
import MenuBar from './MenuBar'
import Footer from './Footer'

import PullButton from './PullButton'

import { Wrapper, MainWrapper } from './styles'
import { useInit, onSortMenuEnd, togglePulled } from './logic'

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
  const homeCommunity = filter(propEq('raw', 'home'), communitiesData)[0]

  return (
    <Wrapper isPulled={isPulled}>
      <PullButton onClick={togglePulled} isPulled={isPulled} />
      <MainWrapper
        pin={pin}
        testId="sidebar"
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
        <Footer pin={pin} sortOptActive={sortOptActive} />
      </MainWrapper>
    </Wrapper>
  )
}

export default connectStore(SidebarContainer)
