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
import { communityPageMenus, getArticlePageMenus } from './menus'

const BottomBar = ({
  testId,
  metric,
  article,
  activeMenu,
  isCommunityBlockExpand,
}) => {
  const menus =
    metric === METRIC.ARTICLE
      ? getArticlePageMenus(article)
      : communityPageMenus

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
            <MenuIcon
              src={item.icon}
              colorTheme={item.iconTheme}
              active={activeMenu === item.raw}
            />
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
  article: T.any, // TODO
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
  article: null,
}

export default BottomBar
