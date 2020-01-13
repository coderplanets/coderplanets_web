import React from 'react'

import { prettyNum } from '@utils'
import {
  Wrapper,
  Divider,
  NumWrapper,
  NumTitle,
  NumNumber,
  RepTitle,
  RepNumber,
} from './styles/numbers_card'

const NumbersCard = ({ user, showFollowers, showFollowings }) => (
  <Wrapper>
    <NumWrapper>
      <RepTitle>声望</RepTitle>
      <RepNumber>{prettyNum(user.achievement.reputation)}</RepNumber>
    </NumWrapper>
    <Divider />
    <NumWrapper onClick={showFollowers.bind(this, user)}>
      <NumTitle>关注者</NumTitle>
      <NumNumber>{prettyNum(user.followersCount)}</NumNumber>
    </NumWrapper>
    <Divider />
    <NumWrapper onClick={showFollowings.bind(this, user)}>
      <NumTitle>关注中</NumTitle>
      <NumNumber>{prettyNum(user.followingsCount)}</NumNumber>
    </NumWrapper>
  </Wrapper>
)

export default NumbersCard
