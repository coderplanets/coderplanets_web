import { FC } from 'react'

import { Trans } from '@/utils'
import type { TTag } from '@/spec'

// import TagCount from './TagCount'

import {
  Wrapper,
  HashWrapper,
  HashSign,
  TagTitle,
  // CountInfoWrapper,
} from '../styles/desktop_view/tag_item'

type TProps = {
  tag: TTag
  active: boolean
  activeid?: string | null
  inline?: boolean
  onSelect?: (tag?: TTag) => void
}

const TagItem: FC<TProps> = ({
  tag,
  active,
  activeid,
  inline = false,
  onSelect,
}) => {
  return (
    <Wrapper $active={active} $inline={inline}>
      <HashWrapper>
        <HashSign
          color={tag.color}
          $active={active}
          $inline={inline}
          activeid={activeid}
        />
      </HashWrapper>
      <TagTitle $active={active} $inline={inline} onClick={() => onSelect(tag)}>
        {Trans(tag.title)}
      </TagTitle>
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
