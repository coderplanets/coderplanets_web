import { FC, memo, Fragment } from 'react'
import { isMobile } from 'react-device-detect'

import type { TUser, TPagedCommunities } from '@/spec'

import FollowButton from '@/widgets/Buttons/FollowButton'
import Button from '@/widgets/Buttons/Button'
import { Br } from '@/widgets/Common'
import Tooltip from '@/widgets/Tooltip'

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
import { onFollow, undoFollow } from './logic'

type TProps = {
  user: TUser
  subscribedCommunities: TPagedCommunities
  hasFollowedUser: boolean | null
}

const Numberspad: FC<TProps> = ({
  user,
  subscribedCommunities,
  hasFollowedUser,
}) => {
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
        <Num>{user.followersCount || 0}</Num>
        <Title>关注者</Title>
      </NormalSection>
      <Divider />
      <NormalSection>
        <Num>{user.followingsCount || 0}</Num>
        <Title>关注了</Title>
      </NormalSection>
      <Divider />
      <JoinSection>
        <CommunitiesWrapper>
          <CommunityList
            items={subscribedCommunities.entries.slice(0, isMobile ? 3 : 7)}
            size={16}
            bottom={1}
            right={8}
            totalCount={subscribedCommunities.totalCount}
          />
        </CommunitiesWrapper>
        {subscribedCommunities.totalCount === 1 ? (
          <Title>加入的社区</Title>
        ) : (
          <Title>加入的子社区</Title>
        )}
      </JoinSection>
      {!isMobile && (
        <Fragment>
          <Divider />
          <FollowSection>
            <Br bottom={4} />
            <FollowButton
              size="small"
              hasFollowed={!!hasFollowedUser}
              followingOffset={-6}
              userLogin={user.login}
              onFollow={onFollow}
              onUndoFollow={undoFollow}
            />
            <Br bottom={6} />
            <Button size="tiny" ghost noBorder>
              违规举报
            </Button>
          </FollowSection>
        </Fragment>
      )}
    </Wrapper>
  )
}

export default memo(Numberspad)
