import React from 'react'
import T from 'prop-types'

import { TYPE } from '@/constant'
import { ICON } from '@/config'
import { multiClick } from '@/utils'

import {
  MenuBlock,
  CommunityBlock,
  ExploreBlock,
  AccountBlock,
} from './ArrowBlock'
import { Wrapper, ItemsWrapper, MenuIcon } from '../styles/bottom_bar'

import { openMenu } from '../logic'

const menus = [
  {
    title: '过滤',
    raw: TYPE.MM_TYPE.FILTER,
    icon: `${ICON}/filter.svg`,
  },
  {
    title: '搜索',
    raw: TYPE.MM_TYPE.SEARCH,
    icon: `${ICON}/search.svg`,
  },
  {
    title: '发布',
    raw: TYPE.MM_TYPE.PUBLISH,
    icon: `${ICON}/edit/publish-pen.svg`,
  },
  {
    title: '更多',
    raw: TYPE.MM_TYPE.MORE,
    icon: `${ICON}/more.svg`,
  },
]

const BottomBar = ({ testId, activeMenu }) => {
  return (
    <Wrapper testId={testId} isMenuActive={activeMenu !== ''}>
      <MenuBlock
        active={activeMenu === TYPE.MM_TYPE.GLOBAL_MENU}
        onClick={multiClick(() => openMenu(TYPE.MM_TYPE.GLOBAL_MENU))}
      />
      <CommunityBlock />
      <ItemsWrapper>
        {menus.map((item) => (
          <div key={item.raw} onClick={multiClick(() => openMenu(item.raw))}>
            <MenuIcon src={item.icon} active={activeMenu === item.raw} />
          </div>
        ))}
      </ItemsWrapper>
      <ExploreBlock />
      <AccountBlock />
    </Wrapper>
  )
}

BottomBar.propTypes = {
  testId: T.string,
  activeMenu: T.oneOf([
    TYPE.MM_TYPE.GLOBAL_MENU,
    TYPE.MM_TYPE.COMMUNITY,
    TYPE.MM_TYPE.FILTER,
    TYPE.MM_TYPE.DISCOVER,
    TYPE.MM_TYPE.PUBLISH,
    TYPE.MM_TYPE.MORE,
    '',
  ]).isRequired,
}

BottomBar.defaultProps = {
  testId: 'modeline-bottom-bar',
}

export default BottomBar
