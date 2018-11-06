import React from 'react'
import FollowButton from '../FollowButton'

import { Wrapper, Title, FollowWrapper } from './styles/header'

const Header = ({ header }) => (
  <Wrapper>
    <Title>{header}</Title>
    <FollowWrapper>
      <FollowButton />
    </FollowWrapper>
  </Wrapper>
)

export default Header
