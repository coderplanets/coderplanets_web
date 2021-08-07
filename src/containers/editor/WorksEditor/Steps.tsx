import { FC, memo } from 'react'

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
} from './styles/steps'

import { gotoStep } from './logic'

type TProps = {
  step: TStep
}

const Steps: FC<TProps> = ({ step }) => {
  if (step === STEP.ZERO) return <Wrapper />

  return (
    <Wrapper>
      <FirstStep>
        <Dot active={step === STEP.ZERO} onClick={() => gotoStep(STEP.ZERO)} />
        <Hint active={step === STEP.ZERO} onClick={() => gotoStep(STEP.ZERO)}>
          作品名称
        </Hint>
      </FirstStep>
      <Step>
        <Dot active={step === STEP.ONE} onClick={() => gotoStep(STEP.ONE)} />
        <Hint active={step === STEP.ONE} onClick={() => gotoStep(STEP.ONE)}>
          基本信息
        </Hint>
      </Step>
      <Step>
        <Dot active={step === STEP.TWO} onClick={() => gotoStep(STEP.TWO)} />
        <Hint active={step === STEP.TWO} onClick={() => gotoStep(STEP.TWO)}>
          技术栈（可选）
        </Hint>
      </Step>
      <Step>
        <Dot
          active={step === STEP.THREE}
          onClick={() => gotoStep(STEP.THREE)}
        />
        <Hint active={step === STEP.THREE} onClick={() => gotoStep(STEP.THREE)}>
          正文介绍
        </Hint>
      </Step>
      <Step>
        <PublishIcon src={`${ICON}/edit/publish-rocket.svg`} />
        <Hint active={step === STEP.FOUR}>完成</Hint>
      </Step>
      <Bar />
    </Wrapper>
  )
}

export default memo(Steps)
