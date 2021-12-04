import { FC, memo } from 'react'
import type { TCommunity, TID } from '@/spec'

import CommunityCard from './CommunityCard'
import { SpaceGrow } from '@/widgets/Common'

import { Wrapper, InnerWrapper } from './styles/community_list'

type TProps = {
  entries: TCommunity[]
  subscribing: boolean
  subscribingId: TID
}

const CommnityList: FC<TProps> = ({ entries, subscribing, subscribingId }) => {
  return (
    <Wrapper>
      <InnerWrapper>
        {entries.map((community) => (
          <CommunityCard
            key={community.raw}
            community={community}
            subscribing={subscribing}
            subscribingId={subscribingId}
          />
        ))}
      </InnerWrapper>
    </Wrapper>
  )
}

export default memo(CommnityList)
