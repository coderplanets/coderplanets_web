import { FC, memo } from 'react'

import type { TPagedCommunities } from '@/spec'
import CommunityList from '@/widgets/CommunityList'

import { Wrapper, Title, List } from './styles/volunteers_badge'

type TProps = {
  communities: TPagedCommunities
}

const VolunteersBadge: FC<TProps> = ({ communities }) => {
  return (
    <Wrapper>
      <Title>社区志愿者</Title>
      <List>
        <CommunityList
          items={communities.entries}
          size={18}
          bottom={2}
          right={8}
          totalCount={communities.totalCount}
        />
      </List>
    </Wrapper>
  )
}

export default memo(VolunteersBadge)
