import { FC, memo } from 'react'
import type { TCommunity } from '@/spec'

import CommunityCard from './CommunityCard'

import { Wrapper, InnerWrapper } from './styles/community_list'

type TProps = {
  entries: TCommunity[]
}

const CommnityList: FC<TProps> = ({ entries }) => {
  return (
    <Wrapper>
      <InnerWrapper>
        {entries.map((community) => (
          <CommunityCard key={community.raw} community={community} />
        ))}
      </InnerWrapper>
    </Wrapper>
  )
}

export default memo(CommnityList)
