import React from 'react'

import { ICON_CMD } from '@/config'

import { ArrowButton } from '@/components/Buttons'

import InputBox from '../InputBox'

import {
  Wrapper,
  IntroTitle,
  TitleIcon,
  StepHint,
  NextBtn,
} from '../../styles/banner/setup_domain'

import { pervStep, nextStep, inputOnChange } from '../../logic'

const SetupInfo = ({ status }) => {
  const { titleValue, descValue } = status

  return (
    <Wrapper>
      <IntroTitle>
        <TitleIcon src={`${ICON_CMD}/new_community/domain.svg`} />
        请填写社区基本信息
        <StepHint>3 / 4</StepHint>
      </IntroTitle>
      <InputBox
        value={titleValue}
        placeholder="社区名称"
        onChange={inputOnChange('titleValue')}
        autoFocus
        noRound
      />
      <InputBox
        value={descValue}
        placeholder="社区一句话描述"
        onChange={inputOnChange('descValue')}
        noRound
      />
      <NextBtn>
        <ArrowButton
          size="medium"
          direction="left"
          onClick={pervStep}
          dimWhenIdle
        >
          上一步
        </ArrowButton>
        <ArrowButton size="large" onClick={nextStep}>
          下一步
        </ArrowButton>
      </NextBtn>
    </Wrapper>
  )
}

export default React.memo(SetupInfo)
