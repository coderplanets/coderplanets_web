import React from 'react'

import FollowButton from '@/widgets/Buttons/FollowButton'
import Button from '@/widgets/Buttons/Button'
import { Br } from '@/widgets/Common'
import Tooltip from '@/widgets/Tooltip'

import {
  Wrapper,
  Divider,
  Section,
  GravitySection,
  NormalSection,
  FollowSection,
  Num,
  Gravity,
  InfoIcon,
  Title,
  JoinAt,
  JoinSlash,
} from './styles/numbers_pad'

const Numberspad = ({ user }) => {
  return (
    <Wrapper>
      <GravitySection>
        <Num>100</Num>
        <Gravity>
          Gravity
          <Tooltip
            content="Gravity: 是由用户所获得的点赞数，收藏数，创作内容的浏览量等综合因素计算出的影响力值。"
            placement="bottom"
          >
            <InfoIcon />
          </Tooltip>
        </Gravity>
      </GravitySection>
      <Divider />
      <NormalSection>
        <Num>37</Num>
        <Title>关注者</Title>
      </NormalSection>
      <Divider />
      <NormalSection>
        <Num>8</Num>
        <Title>关注了</Title>
      </NormalSection>
      {/* <Section>
        <Num>{user.achievement.articlesUpvotesCount}</Num>
        <Title>收获点赞</Title>
      </Section>
      <Divider />
      <Section>
        <Num>{user.achievement.articlesCollectsCount}</Num>
        <Title>被收藏</Title>
      </Section> */}
      <Divider />
      <NormalSection>
        <Num>{user.views}</Num>
        <Title>主页被浏览</Title>
      </NormalSection>
      <Divider />
      <Section>
        <JoinAt>
          20
          <JoinSlash>/</JoinSlash>
          13
          <JoinSlash>/</JoinSlash>
          02
        </JoinAt>
        <Title>注册于</Title>
      </Section>
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

export default React.memo(Numberspad)
