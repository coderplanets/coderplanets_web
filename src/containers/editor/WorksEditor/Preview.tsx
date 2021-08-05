import { FC, memo } from 'react'

import type { TWorks } from '@/spec'
import type { TStep } from './spec'

import WorksCard from '@/components/Cards/WorksCard'
import { STEP } from './constant'

import { Wrapper } from './styles/preview'

type TProps = {
  step: TStep
  works: TWorks
}

const Preview: FC<TProps> = ({ step, works }) => {
  return (
    <Wrapper narrow={step === STEP.ZERO} testid="works-preview">
      <WorksCard item={works} mode="preview" withBg />
    </Wrapper>
  )
}

export default memo(Preview)
