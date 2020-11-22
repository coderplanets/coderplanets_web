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

const SetupDomain = ({ status }) => {
  const { domainValue } = status

  return (
    <Wrapper>
      <IntroTitle>
        <TitleIcon src={`${ICON_CMD}/new_community/domain.svg`} />
        社区的专有域名是?
        <StepHint>2 / 4</StepHint>
      </IntroTitle>
      <InputBox
        value={domainValue}
        placeholder="your-domain"
        onChange={inputOnChange('domainValue')}
        autoFocus
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

export default React.memo(SetupDomain)
