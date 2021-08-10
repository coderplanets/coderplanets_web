import { FC, memo } from 'react'

import type { TTag } from '@/spec'

// import Tooltip from '@/components/Tooltip'
import Tag from './Tag'

import type { TTagView } from '../spec'
import {
  Wrapper,
  InnerWrapper,
  FolderTitle,
} from '../styles/tag_setter/group_tags'

type TProps = {
  tags: TTag[]
  view: TTagView
  folder: string
  withDelete?: boolean
  withSelect?: boolean
  onUpdate?: (tag: TTag) => void | null
  onSelect?: (tag: TTag) => void | null
  onDelete?: (tag: TTag) => void | null
}

const GroupTags: FC<TProps> = ({
  tags,
  folder,
  view,
  withDelete = false,
  withSelect = false,
  onSelect = null,
  onUpdate = null,
  onDelete = null,
}) => {
  return (
    <Wrapper>
      <FolderTitle>{folder}</FolderTitle>
      <InnerWrapper>
        {tags.map((tag) => (
          <Tag
            key={tag.id}
            view={view}
            tag={tag}
            onSelect={onSelect}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </InnerWrapper>
    </Wrapper>
  )
}

export default memo(GroupTags)
