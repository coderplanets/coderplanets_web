import { FC, memo } from 'react'

import type { TCommunity } from '@/spec'
import type { TCommunityView } from '../spec'

// import Tooltip from '@/components/Tooltip'
import Community from './Community'

import {
  Wrapper,
  InnerWrapper,
  HintTitle,
} from '../styles/tag_setter/group_tags'

type TProps = {
  view: TCommunityView
  communities: TCommunity[]
  withDelete?: boolean
  withSelect?: boolean
}

const CommonUsedCommunities: FC<TProps> = ({ communities, view }) => {
  return (
    <Wrapper>
      <HintTitle>常用社区</HintTitle>
      <InnerWrapper>
        {communities.map((item) => (
          <Community key={item.id} item={item} />
        ))}
      </InnerWrapper>
    </Wrapper>
  )
}

export default memo(CommonUsedCommunities)
