import { FC, memo } from 'react'

import { ICON } from '@/config'

import { Wrapper, SelectorIcon } from '../styles/comment/emotion'

const Emotion: FC = () => (
  <Wrapper>
    <SelectorIcon src={`${ICON}/emotion/alien-fill.svg`} />
  </Wrapper>
)

export default memo(Emotion)
