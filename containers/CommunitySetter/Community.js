import React from 'react'

// import { ICON_CMD } from 'config'
import { Wrapper, Logo, Title, Mark } from './styles/community'
import { handleCommunityBelong } from './logic'

const Community = ({ entry: { id, logo, title }, belong }) => (
  <Wrapper onClick={handleCommunityBelong.bind(this, belong, id)}>
    <Logo src={logo} />
    <Title>{title}</Title>
    {belong && <Mark />}
  </Wrapper>
)

export default Community
