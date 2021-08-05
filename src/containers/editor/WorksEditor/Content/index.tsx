import { FC, memo } from 'react'

import { TWorks } from '@/spec'
import { TStep } from '../spec'
import { STEP } from '../constant'

import NamePart from './NamePart'
import BasicInfoPart from './BasicInfoPart'
import TechStackPart from './TechStackPart'
import ArticlePart from './ArticlePart'
import LaunchPart from './LaunchPart'

import { Wrapper } from '../styles/content'

type TProps = {
  step: TStep
  works: TWorks
  useTemplate: boolean
}

const Content: FC<TProps> = ({ step, works, useTemplate }) => {
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
      StepComp = <TechStackPart />
      break
    }

    case STEP.THREE: {
      StepComp = <ArticlePart useTemplate={useTemplate} />
      break
    }

    case STEP.FOUR: {
      StepComp = <LaunchPart />
      break
    }

    default: {
      StepComp = <div>default step</div>
      break
    }
  }

  return <Wrapper>{StepComp}</Wrapper>
}

export default memo(Content)
