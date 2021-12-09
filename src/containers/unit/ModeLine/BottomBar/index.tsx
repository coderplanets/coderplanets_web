import { FC, memo } from 'react'

import type { TArticle, TCommunity, TMetric, TModelineType } from '@/spec'
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
  community: TCommunity
}

const BottomBar: FC<TProps> = ({
  testid = 'modeline-bottom-bar',
  metric,
  article = null,
  community,
  activeMenu,
  isCommunityBlockExpand = false,
}) => {
  const menus =
    metric === METRIC.ARTICLE
      ? getArticlePageMenus(article)
      : communityPageMenus

  const communityInfo = article?.originalCommunity?.raw
    ? article.originalCommunity
    : community

  return (
    <Wrapper testid={testid} isMenuActive={!!activeMenu}>
      <MenuBlock
        active={activeMenu === TYPE.MM_TYPE.GLOBAL_MENU}
        // @ts-ignore
        onClick={multiClick(() => openMenu(TYPE.MM_TYPE.GLOBAL_MENU))}
      />
      <CommunityBlock
        onClick={() => openMenu(TYPE.MM_TYPE.COMMUNITY)}
        community={communityInfo}
        isArticle={!!article}
        isExpand={isCommunityBlockExpand}
      />
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
              raw={item.raw}
              active={activeMenu === item.raw}
            />
            {!isCommunityBlockExpand && item.title && (
              <MenuDesc>{item.title}</MenuDesc>
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
