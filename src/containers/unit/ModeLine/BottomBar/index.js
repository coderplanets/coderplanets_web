import React from 'react'
import T from 'prop-types'
import { values } from 'ramda'

import { METRIC, TYPE } from '@/constant'
import { ICON } from '@/config'
import { multiClick } from '@/utils'

import {
  MenuBlock,
  CommunityBlock,
  ExploreBlock,
  AccountBlock,
} from './ArrowBlock'
import {
  Wrapper,
  ItemsWrapper,
  MenuItem,
  MenuDesc,
  MenuIcon,
} from '../styles/bottom_bar'

import { openMenu } from '../logic'

const communityMenus = [
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

const artileMenus = [
  {
    title: '喜欢',
    raw: TYPE.MM_TYPE.FILTER,
    icon: `${ICON}/article/heart.svg`,
    desc: '喜欢 21',
  },
  {
    title: '搜索',
    raw: TYPE.MM_TYPE.SEARCH,
    icon: `${ICON}/article/comment-modeline.svg`,
    desc: '评论 49',
  },
  {
    title: '发布',
    raw: TYPE.MM_TYPE.PUBLISH,
    icon: `${ICON}/article/collect-modeline.svg`,
  },
  {
    title: '更多',
    raw: TYPE.MM_TYPE.MORE,
    icon: `${ICON}/more.svg`,
  },
]

const BottomBar = ({ testId, metric, activeMenu, isCommunityBlockExpand }) => {
  const menus = metric === 'article' ? artileMenus : communityMenus

  return (
    <Wrapper testId={testId} isMenuActive={activeMenu !== ''}>
      <MenuBlock
        active={activeMenu === TYPE.MM_TYPE.GLOBAL_MENU}
        onClick={multiClick(() => openMenu(TYPE.MM_TYPE.GLOBAL_MENU))}
      />
      <CommunityBlock isExpand={isCommunityBlockExpand} />
      <ItemsWrapper>
        {menus.map((item) => (
          <MenuItem
            key={item.raw}
            onClick={multiClick(() => openMenu(item.raw))}
          >
            <MenuIcon src={item.icon} active={activeMenu === item.raw} />
            {!isCommunityBlockExpand && item.desc && (
              <MenuDesc>{item.desc}</MenuDesc>
            )}
          </MenuItem>
        ))}
      </ItemsWrapper>
      <ExploreBlock />
      <AccountBlock />
    </Wrapper>
  )
}

BottomBar.propTypes = {
  testId: T.string,
  metric: T.oneOf(values(METRIC)).isRequired,
  activeMenu: T.oneOf([
    TYPE.MM_TYPE.GLOBAL_MENU,
    TYPE.MM_TYPE.COMMUNITY,
    TYPE.MM_TYPE.FILTER,
    TYPE.MM_TYPE.DISCOVER,
    TYPE.MM_TYPE.PUBLISH,
    TYPE.MM_TYPE.MORE,
    '',
  ]).isRequired,
  isCommunityBlockExpand: T.bool,
}

BottomBar.defaultProps = {
  testId: 'modeline-bottom-bar',
  isCommunityBlockExpand: false,
}

export default BottomBar
