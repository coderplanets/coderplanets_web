import React from 'react'

import Popover from '../../components/Popover'

import {
  Wrapper,
  CommunityIcon,
  MoreText,
  Text,
  CommunityPopinfo,
} from './styles/community_editor_info'

const CommunityEditorInfo = ({ user: { editableCommunities } }) => {
  if (!editableCommunities || editableCommunities.totalCount === 0) return null

  if (editableCommunities.totalCount > 10) {
    return (
      <Wrapper>
        {editableCommunities.entries.map(community => (
          <Popover
            key={community.id}
            placement="bottom"
            trigger="hover"
            content={<CommunityPopinfo>{community.title}</CommunityPopinfo>}
          >
            <div>
              <CommunityIcon src={community.logo} />
            </div>
          </Popover>
        ))}
        <MoreText>...等 {editableCommunities.totalCount} 个社区的编辑</MoreText>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      {editableCommunities.entries.map(community => (
        <Popover
          key={community.id}
          placement="bottom"
          trigger="hover"
          content={<CommunityPopinfo>{community.title}</CommunityPopinfo>}
        >
          <div>
            <CommunityIcon src={community.logo} />
          </div>
        </Popover>
      ))}
      <Text>社区编辑</Text>
    </Wrapper>
  )
}

export default CommunityEditorInfo
