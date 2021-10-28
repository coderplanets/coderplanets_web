import { FC, memo } from 'react'

import type { TSubmitState } from '@/spec'
import ArrowButton from '@/widgets/Buttons/ArrowButton'
import { Wrapper, FirstStepWrapper } from './styles/footer'

import type { TStep } from './spec'
import { STEP } from './constant'
import { previousStep, nextStep } from './logic'

type TProps = {
  step: TStep
  submitState: TSubmitState
}

const Footer: FC<TProps> = ({ step, submitState }) => {
  const { stepReady } = submitState

  switch (step) {
    case STEP.ZERO: {
      return !stepReady[0] ? null : (
        <FirstStepWrapper>
          <ArrowButton size="large" onClick={nextStep}>
            下一步
          </ArrowButton>
        </FirstStepWrapper>
      )
    }

    default: {
      return (
        <Wrapper>
          <ArrowButton
            size="medium"
            onClick={() => previousStep()}
            direction="left"
            dimWhenIdle
          >
            上一步
          </ArrowButton>
          <ArrowButton size="large" onClick={() => nextStep()}>
            下一步
          </ArrowButton>
        </Wrapper>
      )
    }
  }

  // <Button size="medium" disabled={!valid} onClick={nextStep}>
  //   起飞
  // </Button>
}

export default memo(Footer)
