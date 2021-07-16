import { FC, memo } from 'react'

import { IconButton } from '@/components/Buttons'

import { Wrapper } from '../styles/comment/emotion'

const Emotion: FC = () => (
  <Wrapper>
    <IconButton path="emotion/alien-fill.svg" mRight={0} />
  </Wrapper>
)

export default memo(Emotion)
