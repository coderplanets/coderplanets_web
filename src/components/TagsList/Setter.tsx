import { FC, memo } from 'react'

import { Wrapper, HashIcon, Title } from './styles/setter'

const Setter: FC = () => {
  return (
    <Wrapper>
      <HashIcon />
      <Title>设置标签</Title>
    </Wrapper>
  )
}

export default memo(Setter)
