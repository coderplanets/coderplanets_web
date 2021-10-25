import { FC, memo } from 'react'

import IconButton from '@/widgets/Buttons/IconButton'
import { Wrapper, Normal, Desc, IconWrapper } from './styles/expand_texts'
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
          <IconButton path="article/readme-solid.svg" size={16} />
        </IconWrapper>
      </Normal>
    </Wrapper>
  )
}

export default memo(ExpandTexts)
