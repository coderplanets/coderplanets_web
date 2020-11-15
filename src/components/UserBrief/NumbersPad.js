import React from 'react'

import { prettyNum } from '@/utils'
import { Wrapper, Section, Title, Number } from './styles/numbers_pad'

const NumbersPad = ({ user, listFollowers, listFollowings }) => (
  <Wrapper>
    <Section>
      <Number>{prettyNum(user.achievement.reputation)}</Number>
      <Title>声望</Title>
    </Section>
    <Section onClick={() => listFollowers(user)}>
      <Number>{prettyNum(user.followersCount)}</Number>
      <Title>关注者</Title>
    </Section>
    <Section onClick={() => listFollowings(user)}>
      <Number>{prettyNum(user.followingsCount)}</Number>
      <Title>关注中</Title>
    </Section>
  </Wrapper>
)

export default React.memo(NumbersPad)
