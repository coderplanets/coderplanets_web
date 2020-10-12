import React from 'react'

import { ICON_BASE } from '@/config'

import { Wrapper, Logo, Title } from '../styles/bottom_bar/community_info'

const CommunityInfo = () => {
  return (
    <Wrapper>
      <Logo src={`${ICON_BASE}/pl/javascript.png`} />
      <Title>javascript</Title>
    </Wrapper>
  )
}

export default CommunityInfo
