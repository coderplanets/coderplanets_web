import { FC, memo } from 'react'

import { TSelectOption } from '@/spec'

import type { TStep, TInputData, TTechCommunities } from '../spec'
import { STEP } from '../constant'

import NamePart from './NamePart'
import BasicInfoPart from './BasicInfoPart'
import TechStackPart from './TechStackPart'
import ArticlePart from './ArticlePart'
import LaunchPart from './LaunchPart'

import { Wrapper } from '../styles/content'

type TProps = {
  step: TStep
  inputData: TInputData
  useTemplate: boolean
  socialOptions: TSelectOption[]
  techCommunities: TTechCommunities
}

const Content: FC<TProps> = ({
  step,
  inputData,
  socialOptions,
  useTemplate,
  techCommunities,
}) => {
  let StepComp = null

  switch (step) {
    case STEP.ZERO: {
      StepComp = <NamePart inputData={inputData} />
      break
    }

    case STEP.ONE: {
      StepComp = (
        <BasicInfoPart inputData={inputData} socialOptions={socialOptions} />
      )
      break
    }

    case STEP.TWO: {
      StepComp = <TechStackPart techCommunities={techCommunities} />
      break
    }

    case STEP.THREE: {
      StepComp = <ArticlePart useTemplate={useTemplate} />
      break
    }

    case STEP.FOUR: {
      StepComp = <LaunchPart inputData={inputData} />
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
