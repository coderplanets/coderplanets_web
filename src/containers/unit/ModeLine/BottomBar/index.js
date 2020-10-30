import React from 'react'
import T from 'prop-types'
import { values } from 'ramda'

import { METRIC, TYPE } from '@/constant'
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
import { communityPageMenus, articlePageMenus } from './menus'

const BottomBar = ({ testId, metric, activeMenu, isCommunityBlockExpand }) => {
  const menus =
    metric === METRIC.ARTICLE ? articlePageMenus : communityPageMenus

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
