import { FC, memo } from 'react'
import { includes } from 'ramda'

import type { TTag, TID } from '@/spec'

// import Tooltip from '@/widgets/Tooltip'
import Tag from './Tag'

import type { TTagView } from '../spec'
import {
  Wrapper,
  InnerWrapper,
  HintTitle,
} from '../styles/tag_setter/group_tags'

type TProps = {
  tags: TTag[]
  selectedIds: TID[]
  view: TTagView
  folder: string
  withDelete?: boolean
  withSelect?: boolean
  onTagSelect: (tag: TTag, select: boolean) => void
}

const GroupTags: FC<TProps> = ({
  tags,
  selectedIds,
  folder,
  view,
  onTagSelect,
  withDelete = false,
  withSelect = false,
}) => {
  return (
    <Wrapper>
      {folder !== 'null' ? <HintTitle>{folder}</HintTitle> : <br />}

      <InnerWrapper>
        {tags.map((tag) => (
          <Tag
            key={tag.id}
            view={view}
            tag={tag}
            checked={includes(tag.id, selectedIds)}
            onTagSelect={onTagSelect}
          />
        ))}
      </InnerWrapper>
    </Wrapper>
  )
}

export default memo(GroupTags)
