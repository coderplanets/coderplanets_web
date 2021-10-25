import { FC } from 'react'

import type { TUser } from '@/spec'
import CommunityList from '@/widgets/CommunityList'

import {
  Wrapper,
  MoreText,
  Text,
} from '../styles/sidebar/community_editor_info'

type TProps = {
  user: TUser
}

const CommunityEditorInfo: FC<TProps> = ({ user: { editableCommunities } }) => {
  if (!editableCommunities || editableCommunities.totalCount === 0) return null

  if (editableCommunities.totalCount > 10) {
    return (
      <Wrapper>
        <CommunityList items={editableCommunities.entries} bottom={10} />
        <MoreText>...等 {editableCommunities.totalCount} 个社区的编辑</MoreText>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <CommunityList items={editableCommunities.entries} bottom={10} />
      <Text>社区编辑</Text>
    </Wrapper>
  )
}

export default CommunityEditorInfo
