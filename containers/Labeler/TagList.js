import React from 'react'
import R from 'ramda'

import { ICON_CMD } from '../../config'

import { OptionCheckIcon } from './styles/options'
import { Wrapper, TagItem, TagDot, TagTitle } from './styles/tag_list'

import { uid, sortByColor, Trans } from '../../utils'

const TagList = ({ data, selected, onOptionSelect }) => (
  <Wrapper>
    {sortByColor(data).map(tag => (
      <TagItem key={uid.gen()} onClick={onOptionSelect.bind(this, tag.title)}>
        <OptionCheckIcon
          src={`${ICON_CMD}/check.svg`}
          active={R.contains(tag.title, selected)}
        />
        <TagDot color={tag.color} />
        <TagTitle title={tag.title}>{Trans(tag.title)}</TagTitle>
      </TagItem>
    ))}
  </Wrapper>
)

export default TagList
