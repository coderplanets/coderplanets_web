/*
 *
 * Filter
 *
 */

import { FC, memo } from 'react'

import type { TID, TTag } from '@/spec'

import ExpandTag from './ExpandTag'
import SelectedTag from './SelectedTag'

import { Wrapper, Item, TagsWrapper } from '../styles/filter'

export type TProps = {
  id: TID
  expandMenuId: TID | null
  activeMap: Record<string, TTag>
  options: TTag[]
  revert: boolean
  onSelect: (expandMenuId: TID, tag: TTag) => void
}

const Filter: FC<TProps> = ({
  id,
  expandMenuId = null,
  activeMap,
  options,
  onSelect,
  revert,
}) => {
  return (
    <Wrapper revert={revert}>
      <Item revert={revert}>
        {expandMenuId === id && options ? (
          <TagsWrapper revert={revert}>
            {options.map((item) => (
              <ExpandTag
                key={item.id}
                tag={item}
                activeMap={activeMap}
                expandMenuId={expandMenuId}
                revert={revert}
                onSelect={onSelect}
              />
            ))}
          </TagsWrapper>
        ) : (
          <TagsWrapper revert={revert}>
            <SelectedTag
              tag={activeMap[id]}
              expandMenuId={expandMenuId}
              revert={revert}
              onSelect={onSelect}
            />
          </TagsWrapper>
        )}
      </Item>
    </Wrapper>
  )
}

export default memo(Filter)
