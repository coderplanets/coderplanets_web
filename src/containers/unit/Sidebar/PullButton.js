import React from 'react'

import { ICON } from '@/config'
import { Wrapper, Shape, ArrowIcon } from './styles/pull_button'

const PullButton = () => {
  return (
    <Wrapper>
      <ArrowIcon src={`${ICON}/shape/arrow-simple.svg`} />
      <Shape src={`${ICON}/shape/t.svg`} />
    </Wrapper>
  )
}

export default React.memo(PullButton)
