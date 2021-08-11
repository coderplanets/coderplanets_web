import { FC, memo } from 'react'

import type { TTag } from '@/spec'

// import Tooltip from '@/components/Tooltip'
import Tag from './Tag'

import type { TTagView } from '../spec'
import {
  Wrapper,
  InnerWrapper,
  HintTitle,
} from '../styles/tag_setter/group_tags'

type TProps = {
  tags: TTag[]
  view: TTagView
  folder: string
  withDelete?: boolean
  withSelect?: boolean
}

const GroupTags: FC<TProps> = ({
  tags,
  folder,
  view,
  withDelete = false,
  withSelect = false,
}) => {
  return (
    <Wrapper>
      <HintTitle>{folder}</HintTitle>
      <InnerWrapper>
        {tags.map((tag) => (
          <Tag key={tag.id} view={view} tag={tag} />
        ))}
      </InnerWrapper>
    </Wrapper>
  )
}

export default memo(GroupTags)
