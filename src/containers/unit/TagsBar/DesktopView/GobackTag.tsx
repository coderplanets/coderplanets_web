import { FC } from 'react'

import type { TTag } from '@/spec'
import { ICON } from '@/config'
import { emptyTag } from '@/model'
import { Wrapper, TagIcon, TagTitle } from '../styles/desktop_view/goback_tag'

type TProps = {
  onSelect?: (tag?: TTag) => void
}

const GobackTag: FC<TProps> = ({ onSelect }) => {
  return (
    <Wrapper onClick={() => onSelect(emptyTag)}>
      <TagIcon src={`${ICON}/shape/reset.svg`} />
      <TagTitle>全部标签</TagTitle>
    </Wrapper>
  )
}

export default GobackTag
