import { FC } from 'react'

import type { TTag, TTagMode } from '@/spec'
import { cutRest } from '@/utils/helper'
import { Trans } from '@/utils/i18n'
import { TAG_MODE } from '@/constant'

// import DotDivider from '@/widgets/DotDivider'
// import TagCount from './TagCount'

import {
  Wrapper,
  DotWrapper,
  DotSign,
  SlashSign,
  Tag,
  Title,
  RawWrapper,
  Raw,
} from '../styles/desktop_view/tag_item'

type TProps = {
  tag: TTag
  active: boolean
  onSelect?: (tag?: TTag) => void
  mode: TTagMode
}

const TagItem: FC<TProps> = ({ tag, active, onSelect, mode }) => {
  return (
    <Wrapper $active={active}>
      <DotWrapper>
        {mode === TAG_MODE.DEFAULT && (
          <DotSign color={tag.color} $active={active} />
        )}
        {mode === TAG_MODE.LABEL && (
          <SlashSign color={tag.color} $active={active} />
        )}
      </DotWrapper>
      <Tag $active={active} color={tag.color} onClick={() => onSelect(tag)}>
        <Title color={tag.color}>{cutRest(Trans(tag.title), 10)}</Title>
        <RawWrapper $active={active}>
          {/* <DotDivider radius={2} space={6} /> */}
          <Raw>{tag.raw}</Raw>
        </RawWrapper>
      </Tag>
      {/* <SpaceGrow />

      {!inline && (
        <CountInfoWrapper>
          <TagCount num={getRandomInt(5, 1000)} />
        </CountInfoWrapper>
      )} */}
    </Wrapper>
  )
}

export default TagItem
