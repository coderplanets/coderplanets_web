import { FC, memo } from 'react'
import { useRouter } from 'next/router'
import { includes } from 'ramda'

import type { TArticle, TCommunity, TMetric, TModelineType } from '@/spec'
import { METRIC, TYPE, ROUTE } from '@/constant'
import { multiClick } from '@/utils/helper'

import {
  MenuBlock,
  CommunityBlock,
  MainBlock,
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

const isNotBelongToCommunityRoute = (pathname: string): boolean => {
  return includes(pathname, [
    `/${ROUTE.MEETUPS}`,
    `/${ROUTE.PLAZA}`,
    `/${ROUTE.COOL_GUIDE}`,
    `/${ROUTE.HAVE_A_DRINK}`,
    `/${ROUTE.EXPLORE}`,
    '/works/[id]',
    '/guide/[id]',
    '/meetup/[id]',
  ])
}

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
  const router = useRouter()

  const menus = includes(metric, [METRIC.ARTICLE, METRIC.WORKS_ARTICLE])
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
      {isNotBelongToCommunityRoute(router.pathname) ? (
        <MainBlock />
      ) : (
        <CommunityBlock
          onClick={() => openMenu(TYPE.MM_TYPE.COMMUNITY)}
          community={communityInfo}
          isArticle={!!article}
          isExpand={isCommunityBlockExpand}
        />
      )}

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
            {item.title && <MenuDesc>{item.title}</MenuDesc>}
          </MenuItem>
        ))}
      </ItemsWrapper>
      <ExploreBlock />
      <AccountBlock />
    </Wrapper>
  )
}

export default memo(BottomBar)
