import { FC, memo } from 'react'

import { TWorks, TSelectOption } from '@/spec'

import type { TStep, TInputData } from '../spec'
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
  inputData: TInputData
  useTemplate: boolean
  socialOptions: TSelectOption[]
}

const Content: FC<TProps> = ({
  step,
  works,
  inputData,
  socialOptions,
  useTemplate,
}) => {
  let StepComp = null

  switch (step) {
    case STEP.ZERO: {
      StepComp = <NamePart works={works} />
      break
    }

    case STEP.ONE: {
      StepComp = (
        <BasicInfoPart
          works={works}
          inputData={inputData}
          socialOptions={socialOptions}
        />
      )
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

export default memo(Content)
