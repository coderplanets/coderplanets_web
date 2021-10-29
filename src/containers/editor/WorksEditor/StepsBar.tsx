import { FC, memo } from 'react'

import type { TSubmitState } from '@/spec'
import { ICON } from '@/config'

import type { TStep } from './spec'
import { STEP } from './constant'

import {
  Wrapper,
  Bar,
  FirstStep,
  Step,
  Dot,
  Hint,
  PublishIcon,
  CheckIcon,
} from './styles/steps_bar'

import { gotoStep } from './logic'

type TProps = {
  step: TStep
  submitState: TSubmitState
}

const Steps: FC<TProps> = ({ step, submitState }) => {
  const { stepReady } = submitState

  if (step === STEP.ZERO) return <Wrapper />

  return (
    <Wrapper>
      <FirstStep>
        {stepReady[0] ? (
          <CheckIcon onClick={() => gotoStep(STEP.ZERO)} />
        ) : (
          <Dot
            active={step === STEP.ZERO}
            onClick={() => gotoStep(STEP.ZERO)}
          />
        )}
        <Hint active={step === STEP.ZERO} onClick={() => gotoStep(STEP.ZERO)}>
          作品名称
        </Hint>
      </FirstStep>
      <Step>
        {stepReady[1] ? (
          <CheckIcon onClick={() => gotoStep(STEP.ONE)} />
        ) : (
          <Dot active={step === STEP.ONE} onClick={() => gotoStep(STEP.ONE)} />
        )}
        <Hint active={step === STEP.ONE} onClick={() => gotoStep(STEP.ONE)}>
          基本信息
        </Hint>
      </Step>
      <Step>
        {stepReady[2] ? (
          <CheckIcon onClick={() => gotoStep(STEP.TWO)} />
        ) : (
          <Dot active={step === STEP.TWO} onClick={() => gotoStep(STEP.TWO)} />
        )}
        <Hint active={step === STEP.TWO} onClick={() => gotoStep(STEP.TWO)}>
          技术栈（可选）
        </Hint>
      </Step>
      <Step>
        {stepReady[3] ? (
          <CheckIcon onClick={() => gotoStep(STEP.THREE)} />
        ) : (
          <Dot
            active={step === STEP.THREE}
            onClick={() => gotoStep(STEP.THREE)}
          />
        )}
        <Hint active={step === STEP.THREE} onClick={() => gotoStep(STEP.THREE)}>
          正文介绍
        </Hint>
      </Step>
      <Step>
        <PublishIcon
          active={step === STEP.FOUR}
          src={`${ICON}/edit/publish-rocket.svg`}
        />
        <Hint active={step === STEP.FOUR}>起飞</Hint>
      </Step>
      <Bar />
    </Wrapper>
  )
}

export default memo(Steps)
