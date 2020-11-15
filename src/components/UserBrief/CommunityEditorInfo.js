import React from 'react'

import CommunityList from '@/components/CommunityList'

import { Wrapper, Title } from './styles/community_editor_info'

const CommunityEditorInfo = ({ user: { editableCommunities } }) => {
  if (!editableCommunities || editableCommunities.totalCount === 0) {
    return null
  }

  if (editableCommunities.totalCount > 10) {
    return (
      <Wrapper>
        <Title>参与社区管理: </Title>
        <CommunityList
          items={editableCommunities.entries.slice(0, 6)}
          size="18px"
          bottom="2px"
          right="8px"
          totalCount={editableCommunities.totalCount}
        />
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <Title>参与社区管理: </Title>
      <CommunityList items={editableCommunities.entries} bottom="10px" />
    </Wrapper>
  )
}

export default CommunityEditorInfo
