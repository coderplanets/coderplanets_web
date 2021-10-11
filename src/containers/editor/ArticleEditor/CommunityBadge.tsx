import { FC, memo } from 'react'

import type { TCommunity } from '@/spec'
import { ICON_BASE } from '@/config'
import { cutRest } from '@/utils/helper'

import Tooltip from '@/components/Tooltip'
import CommunityCard from '@/components/Cards/CommunityCard'

import {
  Wrapper,
  BadgeWrapper,
  Logo,
  Intro,
  PubHint,
  Title,
  ChangeBtn,
  ArrowLogo,
} from './styles/community_badge'

type TProps = {
  community: TCommunity
}

const CommunityBadge: FC<TProps> = ({ community }) => {
  return (
    <Wrapper>
      <BadgeWrapper>
        <Intro>
          <PubHint>发布到子社区:</PubHint>
          <Title>
            <Logo src={community.logo} />
            <Tooltip
              content={<CommunityCard item={community} />}
              placement="bottom"
            >
              <div>{cutRest(community.title || '--', 15)}</div>
            </Tooltip>
            <ChangeBtn>
              更换 <ArrowLogo />
            </ChangeBtn>
          </Title>
        </Intro>
      </BadgeWrapper>
    </Wrapper>
  )
}

export default memo(CommunityBadge)
