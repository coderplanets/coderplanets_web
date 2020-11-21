import React from 'react'

import { ICON } from '@/config'

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

const Steps = ({ step }) => {
  if (step === STEP.ZERO) return <Wrapper />

  return (
    <Wrapper>
      <FirstStep>
        <Dot active={step === STEP.ZERO} onClick={() => gotoStep(STEP.ZERO)} />
        <Hint active={step === STEP.ZERO}>作品名称</Hint>
      </FirstStep>
      <Step left="25%">
        <Dot active={step === STEP.ONE} onClick={() => gotoStep(STEP.ONE)} />
        <Hint active={step === STEP.ONE}>基本信息</Hint>
      </Step>
      <Step left="50%">
        <Dot active={step === STEP.TWO} onClick={() => gotoStep(STEP.TWO)} />
        <Hint active={step === STEP.TWO}>技术栈（可选）</Hint>
      </Step>
      <Step left="75%">
        <Dot
          active={step === STEP.THREE}
          onClick={() => gotoStep(STEP.THREE)}
        />
        <Hint active={step === STEP.THREE}>正文介绍</Hint>
      </Step>
      <Step left="99%">
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

export default React.memo(Steps)
