import React from 'react'

import CommunityList from '@/components/CommunityList'

import { Wrapper, MoreText, Text } from './styles/community_editor_info'

const CommunityEditorInfo = ({ user: { editableCommunities } }) => {
  if (!editableCommunities || editableCommunities.totalCount === 0) return null

  if (editableCommunities.totalCount > 10) {
    return (
      <Wrapper>
        <CommunityList items={editableCommunities.entries} bottom="10px" />
        <MoreText>...等 {editableCommunities.totalCount} 个社区的编辑</MoreText>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <CommunityList items={editableCommunities.entries} bottom="10px" />
      <Text>社区编辑</Text>
    </Wrapper>
  )
}

export default CommunityEditorInfo
