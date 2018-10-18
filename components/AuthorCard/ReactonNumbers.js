import React from 'react'

import {
  Wrapper,
  ReactionNum,
  NumDesc,
  Number,
} from './styles/reaction_numbers'

const ReactionNumbers = ({ user }) => (
  <Wrapper>
    <ReactionNum>
      <NumDesc>声望</NumDesc>
      <Number>{user.achievement.reputation}</Number>
    </ReactionNum>
    <ReactionNum>
      <NumDesc>关注者</NumDesc>
      <Number>{user.followersCount}</Number>
    </ReactionNum>
    <ReactionNum>
      <NumDesc>关注中</NumDesc>
      <Number>{user.followingsCount}</Number>
    </ReactionNum>
  </Wrapper>
)

export default ReactionNumbers
