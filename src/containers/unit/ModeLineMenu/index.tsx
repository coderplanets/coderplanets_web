/*
 *
 * ModeLineMenu
 *
 */

import { FC } from 'react'

import type { TModelineType } from '@/spec'
import { TYPE } from '@/constant'
import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

// TODO: 全部动态加载
import GlobalMenu from './GlobalMenu/index'
import SearchMenu from './SearchMenu'
import MoreMenu from './MoreMenu'
import FilterMenu from './FilterMenu'
import CommunityMenu from './CommunityMenu'
import ExploreMenu from './ExploreMenu'
import ShareMenu from './ShareMenu'
import CollectMenu from './CollectMenu'
import ReportMenu from './ReportMenu'

import type { TStore } from './store'
import { Wrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ModeLineMenu')

const renderMenus = (type, curActive, subscribedCommunities) => {
  switch (type) {
    case TYPE.MM_TYPE.MORE: {
      return <MoreMenu curActive={curActive} />
    }

    case TYPE.MM_TYPE.SEARCH: {
      return <SearchMenu />
    }

    case TYPE.MM_TYPE.FILTER: {
      return <FilterMenu curActive={curActive} />
    }

    case TYPE.MM_TYPE.COMMUNITY: {
      return <CommunityMenu community={curActive.community} />
    }

    case TYPE.MM_TYPE.EXPLORE: {
      return <ExploreMenu communities={subscribedCommunities} />
    }

    case TYPE.MM_TYPE.SHARE: {
      return <ShareMenu />
    }

    case TYPE.MM_TYPE.COLLECT: {
      return <CollectMenu />
    }

    case TYPE.MM_TYPE.REPORT: {
      return <ReportMenu />
    }

    default: {
      return <GlobalMenu />
    }
  }
}

type TProps = {
  modeLineMenu?: TStore
  type?: TModelineType
  testid?: string
}

const ModeLineMenuContainer: FC<TProps> = ({
  modeLineMenu: store,
  testid = 'mode-line-menu',
  type = TYPE.MM_TYPE.GLOBAL_MENU,
}) => {
  useInit(store)
  const { curActive, subscribedCommunities } = store

  return (
    <Wrapper testid={testid}>
      {renderMenus(type, curActive, subscribedCommunities)}
    </Wrapper>
  )
}

export default bond(ModeLineMenuContainer, 'modeLineMenu') as FC<TProps>
