import { FC, memo } from 'react'

import type { TArticle, TMetric, TModelineType } from '@/spec'
import { METRIC, TYPE } from '@/constant'
import { multiClick } from '@/utils/helper'

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

type TProps = {
  testid?: string
  metric: TMetric
  activeMenu: TModelineType
  isCommunityBlockExpand?: boolean
  article: TArticle | null
}

const BottomBar: FC<TProps> = ({
  testid = 'modeline-bottom-bar',
  metric,
  article = null,
  activeMenu,
  isCommunityBlockExpand = false,
}) => {
  const menus =
    metric === METRIC.ARTICLE
      ? getArticlePageMenus(article)
      : communityPageMenus

  return (
    <Wrapper testid={testid} isMenuActive={!!activeMenu}>
      <MenuBlock
        active={activeMenu === TYPE.MM_TYPE.GLOBAL_MENU}
        onClick={multiClick(() => openMenu(TYPE.MM_TYPE.GLOBAL_MENU))}
      />
      <CommunityBlock isExpand={isCommunityBlockExpand} />
      <ItemsWrapper>
        {menus.map((item) => (
          <MenuItem
            key={item.raw}
            // @ts-ignore
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

export default memo(BottomBar)
