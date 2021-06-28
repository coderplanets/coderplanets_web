import React from 'react'

import { getRandomInt, Trans } from '@/utils'
import { SpaceGrow } from '@/components/Common'

import TagCount from './TagCount'

import {
  Wrapper,
  HashSign,
  TagTitle,
  CountInfoWrapper,
} from '../styles/desktop_view/tag_item'

const TagItem = ({ tag, active, activeid, inline, onSelect }) => {
  return (
    <Wrapper $active={active} $inline={inline}>
      <HashSign
        color={tag.color}
        $active={active}
        $inline={inline}
        activeid={activeid}
      />

      <TagTitle $active={active} $inline={inline} onClick={() => onSelect(tag)}>
        {Trans(tag.title)}
      </TagTitle>
      <SpaceGrow />

      {!inline && (
        <CountInfoWrapper>
          <TagCount num={getRandomInt(5, 1000)} />
        </CountInfoWrapper>
      )}
    </Wrapper>
  )
}

export default TagItem
