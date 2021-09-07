import { FC, memo } from 'react'

import { ICON } from '@/config'

import {
  Wrapper,
  Normal,
  Desc,
  IconWrapper,
  MoreIcon,
} from './styles/expand_texts'
import { toggleDescExpand } from './logic'

const placeholder = '可能是最性感的开发者社区.'

type TProps = {
  descExpand: boolean
  desc?: string
}

const ExpandTexts: FC<TProps> = ({ descExpand, desc = placeholder }) => {
  return (
    <Wrapper>
      <Normal>
        <Desc>{desc}</Desc>
        <IconWrapper onClick={toggleDescExpand}>
          <MoreIcon src={`${ICON}/article/readme-solid.svg`} />
        </IconWrapper>
      </Normal>
    </Wrapper>
  )
}

export default memo(ExpandTexts)
