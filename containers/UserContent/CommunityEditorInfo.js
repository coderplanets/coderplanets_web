import React from 'react'

import { Popover } from '../../components'

import {
  Wrapper,
  CommunityIcon,
  MoreText,
  Text,
  CommunityPopinfo,
} from './styles/community_editor_info'
import { uid } from '../../utils'

const CommunityEditorInfo = ({ user: { editableCommunities } }) => {
  if (editableCommunities.totalCount === 0) return null

  if (editableCommunities.totalCount > 10) {
    return (
      <Wrapper>
        {editableCommunities.entries.map(community => (
          <Popover
            key={uid.gen()}
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
          key={uid.gen()}
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
