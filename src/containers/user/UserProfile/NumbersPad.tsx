import { FC, memo } from 'react'

import type { TUser } from '@/spec'
import FollowButton from '@/widgets/Buttons/FollowButton'
import Button from '@/widgets/Buttons/Button'
import { Br } from '@/widgets/Common'
import Tooltip from '@/widgets/Tooltip'
import { mockCommunities } from '@/utils/mock'

import CommunityList from '@/widgets/CommunityList'

import {
  Wrapper,
  Divider,
  GravitySection,
  NormalSection,
  FollowSection,
  JoinSection,
  CommunitiesWrapper,
  Num,
  Gravity,
  InfoIcon,
  Title,
} from './styles/numbers_pad'

type TProps = {
  user: TUser
}

const Numberspad: FC<TProps> = ({ user }) => {
  return (
    <Wrapper>
      <GravitySection>
        <Num>100</Num>
        <Gravity>
          Gravity
          <Tooltip
            content="Gravity: 是由用户所获得的点赞数，收藏数，创作内容的浏览量，以及回答他人问题被采纳的次数等综合因素计算出的影响力值。"
            placement="bottom"
          >
            <InfoIcon />
          </Tooltip>
        </Gravity>
      </GravitySection>
      <Divider />
      <NormalSection>
        <Num>{user.followersCount}</Num>
        <Title>关注者</Title>
      </NormalSection>
      <Divider />
      <NormalSection>
        <Num>{user.followingsCount}</Num>
        <Title>关注了</Title>
      </NormalSection>
      <Divider />
      <JoinSection>
        <CommunitiesWrapper>
          <CommunityList
            items={mockCommunities(7)}
            size={16}
            bottom={2}
            right={8}
            totalCount={10}
          />
        </CommunitiesWrapper>
        <Title>加入的子社区</Title>
      </JoinSection>
      <Divider />
      <FollowSection>
        <Br bottom={4} />
        <FollowButton size="small" hasFollowed={false} followingOffset={-6} />
        <Br bottom={6} />
        <Button size="tiny" ghost noBorder>
          违规举报
        </Button>
      </FollowSection>
    </Wrapper>
  )
}

export default memo(Numberspad)
