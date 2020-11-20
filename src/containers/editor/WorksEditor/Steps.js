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

const Steps = ({ curStep }) => {
  return (
    <Wrapper>
      <FirstStep>
        <Dot active={curStep === STEP.ZERO} />
        <Hint active={curStep === STEP.ZERO}>作品名称</Hint>
      </FirstStep>
      <Step left="25%">
        <Dot active={curStep === STEP.ONE} />
        <Hint active={curStep === STEP.ONE}>基本信息</Hint>
      </Step>
      <Step left="50%">
        <Dot active={curStep === STEP.TWO} />
        <Hint active={curStep === STEP.TWO}>技术栈（可选）</Hint>
      </Step>
      <Step left="75%">
        <Dot active={curStep === STEP.THREE} />
        <Hint active={curStep === STEP.THREE}>详细介绍</Hint>
      </Step>
      <Step left="99%">
        <PublishIcon
          active={curStep === STEP.FOUR}
          src={`${ICON}/edit/publish-rocket.svg`}
        />
        <Hint active={curStep === STEP.FOUR}>起飞</Hint>
      </Step>
      <Bar />
    </Wrapper>
  )
}

export default React.memo(Steps)
