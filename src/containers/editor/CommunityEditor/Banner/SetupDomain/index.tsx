import { FC, memo } from 'react'

import { SIZE } from '@/constant'

import ArrowButton from '@/widgets/Buttons/ArrowButton'

import InputBox from '../InputBox'

import {
  Wrapper,
  IntroTitle,
  DomainIcon,
  StepHint,
  NextBtn,
} from '../../styles/banner/setup_domain'

import type { TSetupDomainStatus } from '../../spec'
import { pervStep, nextStep, inputOnChange } from '../../logic'

type TProps = {
  status: TSetupDomainStatus
}
const SetupDomain: FC<TProps> = ({ status }) => {
  const { domainValue } = status

  return (
    <Wrapper>
      <IntroTitle>
        <DomainIcon />
        社区的子域名
        <StepHint>2 / 4</StepHint>
      </IntroTitle>
      <InputBox
        value={domainValue}
        placeholder="your-domain"
        onChange={(e) => inputOnChange(e, 'domainValue')}
      />
      <NextBtn>
        <ArrowButton
          size={SIZE.MEDIUM}
          direction="left"
          onClick={pervStep}
          dimWhenIdle
        >
          上一步
        </ArrowButton>
        <ArrowButton size={SIZE.MEDIUM} onClick={nextStep}>
          下一步
        </ArrowButton>
      </NextBtn>
    </Wrapper>
  )
}

export default memo(SetupDomain)
