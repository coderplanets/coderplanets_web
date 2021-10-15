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
  highlightTitle?: boolean
  communities: TCommunity[]
  canActOnSeleted?: boolean
  allChecked?: boolean
}

const CommunitiesList: FC<TProps> = ({
  title,
  canActOnSeleted = true,
  communities,
  highlightTitle = false,
  allChecked = false,
}) => {
  return (
    <Wrapper>
      <HintTitle highlight={highlightTitle}>{title}</HintTitle>
      <InnerWrapper>
        {communities.map((item) => (
          <CommunityCard
            key={item.id}
            item={item}
            checked={allChecked}
            canActOnSeleted={canActOnSeleted}
          />
        ))}
      </InnerWrapper>
    </Wrapper>
  )
}

export default memo(CommunitiesList)
