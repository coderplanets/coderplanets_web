import { FC, memo } from 'react'

import type { TSelectOption, TTechCommunities, TEditMode, TUser } from '@/spec'

import type { TStep, TInputData } from '../spec'
import { STEP } from '../constant'

import NamePart from './NamePart'
import BasicInfoPart from './BasicInfoPart'
import TechStackPart from './TechStackPart'
import ArticlePart from './ArticlePart'
import LaunchPart from './LaunchPart'

import { Wrapper } from '../styles/content'

type TProps = {
  mode: TEditMode
  step: TStep
  inputData: TInputData
  socialOptions: TSelectOption[]
  techCommunities: TTechCommunities
  searchedUsers: TUser[]
}

const Content: FC<TProps> = ({
  mode,
  step,
  inputData,
  socialOptions,
  techCommunities,
  searchedUsers,
}) => {
  let StepComp = null

  switch (step) {
    case STEP.ONE: {
      StepComp = (
        <BasicInfoPart
          inputData={inputData}
          socialOptions={socialOptions}
          searchedUsers={searchedUsers}
        />
      )
      break
    }

    case STEP.TWO: {
      StepComp = <TechStackPart techCommunities={techCommunities} />
      break
    }

    case STEP.THREE: {
      StepComp = <ArticlePart inputData={inputData} />
      break
    }

    case STEP.FOUR: {
      StepComp = <LaunchPart inputData={inputData} />
      break
    }

    default: {
      StepComp = <NamePart mode={mode} inputData={inputData} />
      break
    }
  }

  return <Wrapper>{StepComp}</Wrapper>
}

export default memo(Content)
