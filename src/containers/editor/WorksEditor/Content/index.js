import React from 'react'

import { STEP } from '../constant'

import NamePart from './NamePart'
import BasicInfoPart from './BasicInfoPart'
import TechStackPart from './TechStackPart'
import ArticlePart from './ArticlePart'
import LaunchPart from './LaunchPart'

import { Wrapper } from '../styles/content'

const Content = ({ step, works, useTemplate }) => {
  let StepComp = null

  switch (step) {
    case STEP.ZERO: {
      StepComp = <NamePart works={works} />
      break
    }

    case STEP.ONE: {
      StepComp = <BasicInfoPart works={works} />
      break
    }

    case STEP.TWO: {
      StepComp = <TechStackPart works={works} />
      break
    }

    case STEP.THREE: {
      StepComp = <ArticlePart works={works} useTemplate={useTemplate} />
      break
    }

    case STEP.FOUR: {
      StepComp = <LaunchPart works={works} />
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
