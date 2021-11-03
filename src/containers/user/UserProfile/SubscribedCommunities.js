import React from 'react'

import CommunityList from '@/widgets/CommunityList'

import { Wrapper, Title, Divider } from './styles/subscribed_communities'

const SubscribedCommunities = ({ items }) => {
  if (!items?.entries) return null

  return (
    <Wrapper>
      <Title>关注的社区</Title>
      <Divider />
      <CommunityList
        items={items.entries.slice(0, 18)}
        size={18}
        bottom={2}
        right={12}
        totalCount={items.totalCount}
      />
    </Wrapper>
  )
}

export default React.memo(SubscribedCommunities)
