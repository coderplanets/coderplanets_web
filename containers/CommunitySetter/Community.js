import React from 'react'

// import { ICON_CMD } from 'config'
import { Wrapper, Logo, Title, Mark } from './styles/community'

const Community = ({ entry: { logo, title } }) => (
  <Wrapper>
    <Logo src={logo} />
    <Title>{title}</Title>
    <Mark />
  </Wrapper>
)

export default Community
