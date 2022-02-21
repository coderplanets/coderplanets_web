/*
 *
 * Sidebar
 *
 */

import { FC } from 'react'
import { filter, propEq } from 'ramda'

import type { TCommunity } from '@/spec'
import { HCN, ANCHOR } from '@/constant'
import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

import Header from './Header'
import MenuList from './MenuList/index'
import MenuBar from './MenuList/MenuBar'
import Footer from './Footer'

import type { TStore } from './store'
import { MainWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:Sidebar:index')

type TProps = {
  sidebar: TStore
}

const SidebarContainer: FC<TProps> = ({ sidebar: store }) => {
  useInit(store)

  const {
    curCommunity,
    pin,
    searchCommunityValue,
    sortOptActive,
    communitiesData,
    ispulled,
  } = store

  // onMouseLeave={logic.leaveSidebar}
  // onMouseLeave is not unreliable in chrome: https://github.com/facebook/react/issues/4492
  const activeRaw = curCommunity.raw
  const homeCommunity = filter(
    propEq('raw', HCN),
    communitiesData,
  )[0] as TCommunity

  return (
    <MainWrapper
      testid="sidebar"
      pin={pin}
      className={ANCHOR.GLOBAL_BLUR_CLASS}
      ispulled={ispulled}
    >
      <Header pin={pin} searchCommunityValue={searchCommunityValue} />
      {/* move home community out of menulist to avoid rerender */}
      <MenuBar pin={pin} item={homeCommunity} activeRaw={activeRaw} />

      <MenuList
        items={communitiesData}
        pin={pin}
        sortOptActive={sortOptActive}
        activeRaw={activeRaw}
      />
      {pin && <Footer pin={pin} sortOptActive={sortOptActive} />}
    </MainWrapper>
  )
}

export default bond(SidebarContainer, 'sidebar') as FC<TProps>
