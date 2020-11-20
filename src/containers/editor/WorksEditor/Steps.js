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

const Steps = ({ step }) => {
  if (step === STEP.ZERO) return <Wrapper />

  return (
    <Wrapper>
      <FirstStep>
        <Dot active={step === STEP.ZERO} />
        <Hint active={step === STEP.ZERO}>作品名称</Hint>
      </FirstStep>
      <Step left="25%">
        <Dot active={step === STEP.ONE} />
        <Hint active={step === STEP.ONE}>基本信息</Hint>
      </Step>
      <Step left="50%">
        <Dot active={step === STEP.TWO} />
        <Hint active={step === STEP.TWO}>技术栈（可选）</Hint>
      </Step>
      <Step left="75%">
        <Dot active={step === STEP.THREE} />
        <Hint active={step === STEP.THREE}>详细介绍</Hint>
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
