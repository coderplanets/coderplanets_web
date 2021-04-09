import React from 'react'

import { ICON } from '@/config'

import { Wrapper, SelectorIcon } from '../styles/comment/emotion'

const Emotion: React.FC = () => (
  <Wrapper>
    <SelectorIcon src={`${ICON}/emotion/alien-fill.svg`} />
  </Wrapper>
)

export default React.memo(Emotion)
