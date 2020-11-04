import React from 'react'

import { ICON } from '@/config'
import { Wrapper, Shape, ArrowIcon } from './styles/pull_button'

const PullButton = ({ onClick, isPulled }) => {
  return (
    <Wrapper onClick={onClick}>
      <ArrowIcon src={`${ICON}/shape/arrow-simple.svg`} isPulled={isPulled} />
      <Shape src={`${ICON}/shape/t.svg`} />
    </Wrapper>
  )
}

export default React.memo(PullButton)
