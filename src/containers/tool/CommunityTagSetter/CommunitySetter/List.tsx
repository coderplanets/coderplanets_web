import { FC, memo } from 'react'

import type { TCommunity } from '@/spec'

import Community from './Community'

import type { TTagView } from '../spec'
import { Wrapper, InnerWrapper } from '../styles/tag_setter/group_tags'

type TProps = {
  communities: TCommunity[]
  view: TTagView
  folder: string
  withDelete?: boolean
  withSelect?: boolean
}

const List: FC<TProps> = ({ communities, view }) => {
  return (
    <Wrapper>
      <InnerWrapper>
        {communities.map((item) => (
          <Community key={item.id} item={item} />
        ))}
      </InnerWrapper>
    </Wrapper>
  )
}

export default memo(List)
