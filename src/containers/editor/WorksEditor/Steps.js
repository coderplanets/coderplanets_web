import React from 'react'

import { ICON } from '@/config'
import {
  Wrapper,
  Bar,
  FirstStep,
  Step,
  Dot,
  Hint,
  PublishIcon,
} from './styles/steps'

const Steps = () => {
  return (
    <Wrapper>
      <FirstStep>
        <Dot />
        <Hint>作品名称</Hint>
      </FirstStep>
      <Step left="25%">
        <Dot active />
        <Hint active>基本信息</Hint>
      </Step>
      <Step left="50%">
        <Dot />
        <Hint>技术栈（可选）</Hint>
      </Step>
      <Step left="75%">
        <Dot />
        <Hint>详细介绍</Hint>
      </Step>
      <Step left="99%">
        <PublishIcon src={`${ICON}/edit/publish-rocket.svg`} />
        <Hint>起飞</Hint>
      </Step>
      <Bar />
    </Wrapper>
  )
}

export default React.memo(Steps)
