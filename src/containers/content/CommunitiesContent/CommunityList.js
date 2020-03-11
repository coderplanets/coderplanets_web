import React from 'react'

import CommunityCard from './CommunityCard'

import { Wrapper } from './styles/community_list'

const CommnityList = ({ entries, restProps }) => {
  return (
    <Wrapper>
      {entries.map(community => (
        <CommunityCard
          key={community.raw}
          community={community}
          restProps={restProps}
        />
      ))}
    </Wrapper>
  )
}

export default React.memo(CommnityList)
