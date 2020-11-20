import React from 'react'

import { STEP } from '../constant'
import NamePart from './NamePart'

import { Wrapper } from '../styles/content'

const Content = ({ step, works }) => {
  let StepComp = null
  switch (step) {
    case STEP.ZERO: {
      StepComp = <NamePart works={works} />
      break
    }
    case STEP.ONE: {
      StepComp = <div>OneStep</div>
      break
    }
    default: {
      StepComp = <div>default step</div>
      break
    }
  }

  return <Wrapper>{StepComp}</Wrapper>
}

export default React.memo(Content)
