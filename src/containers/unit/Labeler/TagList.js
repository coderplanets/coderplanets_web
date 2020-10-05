import React from 'react'
import { contains } from 'ramda'

import { ICON_CMD } from '@/config'

import { uid, sortByColor, Trans } from '@/utils'
import { OptionCheckIcon } from './styles/options'
import { Wrapper, TagItem, TagDot, TagTitle } from './styles/tag_list'

const TagList = ({ items, selected, onOptionSelect }) => (
  <Wrapper>
    {sortByColor(items).map((tag) => (
      <TagItem key={uid.gen()} onClick={() => onOptionSelect(tag.title)}>
        <OptionCheckIcon
          src={`${ICON_CMD}/check.svg`}
          active={contains(tag.title, selected)}
        />
        <TagDot color={tag.color} />
        <TagTitle title={tag.title}>{Trans(tag.title)}</TagTitle>
      </TagItem>
    ))}
  </Wrapper>
)

export default React.memo(TagList)
