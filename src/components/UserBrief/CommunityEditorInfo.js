import React from 'react'

import CommunityList from '@/components/CommunityList'

import { Wrapper, Title } from './styles/community_editor_info'

const CommunityEditorInfo = ({ user: { subscribedCommunities } }) => {
  // if (!editableCommunities || editableCommunities.totalCount === 0) return null
  if (!subscribedCommunities || subscribedCommunities.totalCount === 0) {
    return null
  }

  // if (editableCommunities.totalCount > 10) {
  if (subscribedCommunities.totalCount > 10) {
    return (
      <Wrapper>
        <Title>参与社区管理: </Title>
        <CommunityList
          items={subscribedCommunities.entries.slice(0, 6)}
          size="18px"
          bottom="2px"
          right="8px"
          totalCount={subscribedCommunities.totalCount}
        />
        {/* <MoreText>...等 {subscribedCommunities.totalCount} 个社区管理</MoreText> */}
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <Title>参与社区管理: </Title>
      <CommunityList items={subscribedCommunities.entries} bottom="10px" />
    </Wrapper>
  )
}

export default CommunityEditorInfo
