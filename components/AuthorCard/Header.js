import React from 'react'
import FollowButton from '../FollowButton'

import { Wrapper, Title, FollowWrapper } from './styles/header'

const Header = () => (
  <Wrapper>
    <Title>关于作者</Title>
    <FollowWrapper>
      <FollowButton />
    </FollowWrapper>
  </Wrapper>
)

export default Header
