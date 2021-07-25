import { FC, memo } from 'react'

import { IconButton } from '@/components/Buttons'

import { Wrapper } from '../styles/comment/emotion'

const Emotion: FC = () => (
  <Wrapper>
    <IconButton path="emotion/emotion.svg" mRight={0} mTop={1} />
  </Wrapper>
)

export default memo(Emotion)
