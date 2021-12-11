import { FC, memo } from 'react'

import type { TCommunity } from '@/spec'
import { HCN } from '@/constant'

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

const CommunityInfo: FC<TProps> = ({
  community,
  isExpand,
  isArticle = false,
}) => {
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
      {!community.raw && <DefaultTitle>CoderPlanets</DefaultTitle>}
    </Wrapper>
  )
}

export default memo(CommunityInfo)
