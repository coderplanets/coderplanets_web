import React from 'react'

import { FollowButton } from '../../components'

import { Wrapper, Title, FollowWrapper } from './styles/header'

const Header = ({ title }) => (
  <Wrapper>
    <Title>{title}</Title>
    <FollowWrapper>
      <FollowButton />
    </FollowWrapper>
  </Wrapper>
)

export default Header
