import { FC, memo } from 'react'

import type { TCommunity } from '@/spec'

// import Tooltip from '@/components/Tooltip'
import CommunityCard from './CommunityCard'

import {
  Wrapper,
  InnerWrapper,
  HintTitle,
} from '../styles/community_setter/list'

type TProps = {
  title: string
  communities: TCommunity[]
}

const CommunitiesList: FC<TProps> = ({ title, communities }) => {
  return (
    <Wrapper>
      <HintTitle>{title}</HintTitle>
      <InnerWrapper>
        {communities.map((item) => (
          <CommunityCard key={item.id} item={item} />
        ))}
      </InnerWrapper>
    </Wrapper>
  )
}

export default memo(CommunitiesList)
