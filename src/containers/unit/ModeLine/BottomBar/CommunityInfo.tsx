import { FC, memo } from 'react'
import { useRouter } from 'next/router'

import type { TCommunity } from '@/spec'
import { HCN, ROUTE } from '@/constant'

import {
  Wrapper,
  Logo,
  Title,
  HomeTitle,
  DefaultTitle,
} from '../styles/bottom_bar/community_info'

type TProps = {
  community: TCommunity
  isExpand: boolean
  isArticle?: boolean
}

const getDefaultTitle = (pathname: string): string => {
  if (pathname === `/${ROUTE.COOL_GUIDE}`) {
    return '酷导航'
  }
  if (pathname === `/${ROUTE.HAVE_A_DRINK}`) {
    return '来一杯'
  }
  if (pathname === `/${ROUTE.EXPLORE}`) {
    return '发现'
  }
  return 'CoderPlanets'
}

const CommunityInfo: FC<TProps> = ({
  community,
  isExpand,
  isArticle = false,
}) => {
  const router = useRouter()

  return (
    <Wrapper>
      {community.raw && community.raw !== HCN && (
        <Logo src={community.logo} isExpand={isExpand} />
      )}
      {isArticle && community.raw && community.raw === HCN && (
        <HomeTitle>首页</HomeTitle>
      )}
      {isExpand && community.raw && community.raw !== HCN && (
        <Title isSubscribed={community.viewerHasSubscribed}>
          {community.title}
        </Title>
      )}
      {!community.raw && (
        <DefaultTitle>{getDefaultTitle(router.pathname)}</DefaultTitle>
      )}
    </Wrapper>
  )
}

export default memo(CommunityInfo)
