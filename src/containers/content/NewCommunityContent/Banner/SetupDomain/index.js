import React from 'react'

import { ICON_CMD } from '@config'

import { ArrowButton } from '@components/FancyButtons'

import InputBox from '../InputBox'

import {
  Wrapper,
  IntroTitle,
  TitleIcon,
  StepHint,
  NextBtn,
} from '../../styles/banner/setup_domain'

const SetupDomain = () => {
  return (
    <Wrapper>
      <IntroTitle>
        <TitleIcon src={`${ICON_CMD}/new_community/domain.svg`} />
        社区的专有域名是?
        <StepHint>2 / 4</StepHint>
      </IntroTitle>
      <InputBox onChange={console.log} />
      <NextBtn>
        <ArrowButton size="medium" direction="left" transparentFirst>
          上一步
        </ArrowButton>
        <ArrowButton size="large">下一步</ArrowButton>
      </NextBtn>
    </Wrapper>
  )
}

export default SetupDomain
