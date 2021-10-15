import { FC, memo } from 'react'

import { setArticleTag } from '@/utils/helper'
import { Wrapper, HashIcon, Title } from './styles/setter'

const Setter: FC = () => {
  return (
    <Wrapper onClick={setArticleTag}>
      <HashIcon />
      <Title>设置标签</Title>
    </Wrapper>
  )
}

export default memo(Setter)
