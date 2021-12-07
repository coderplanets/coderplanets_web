import { FC, memo } from 'react'

import type { TCommunity } from '@/spec'
import { HCN } from '@/constant'

import { Wrapper, Logo, Title } from '../styles/bottom_bar/community_info'

type TProps = {
  community: TCommunity
  isExpand: boolean
}

const CommunityInfo: FC<TProps> = ({ community, isExpand }) => {
  return (
    <Wrapper>
      {community.raw !== HCN && (
        <Logo src={community.logo} isExpand={isExpand} />
      )}

      {isExpand && (
        <Title isSubscribed={community.viewerHasSubscribed}>
          {community.title}
        </Title>
      )}
    </Wrapper>
  )
}

export default memo(CommunityInfo)
