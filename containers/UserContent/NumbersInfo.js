import React from 'react'

import NumSection from './NumSection'
import { Wrapper, Divider } from './styles/numbers_info'

const NumbersInfo = ({ user }) => (
  <Wrapper>
    <NumSection title="声望" num={user.achievement.reputation} />
    <Divider />
    <NumSection title="关注者" num={user.followersCount} />
    <Divider />
    <NumSection title="关注中" num={user.followingsCount} />
  </Wrapper>
)

export default NumbersInfo
