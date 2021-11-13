import { FC, memo } from 'react'
import { isEmpty } from 'ramda'

import { SIZE } from '@/constant'

import ArrowButton from '@/widgets/Buttons/ArrowButton'

import InputBox from './InputBox'

import {
  Wrapper,
  IntroTitle,
  DomainIcon,
  StepHint,
  NextBtn,
  ErrorMsg,
} from '../styles/banner/setup_domain'

import type { TSetupDomainStatus, TValidState } from '../spec'
import { pervStep, nextStep, inputOnChange } from '../logic'

type TProps = {
  status: TSetupDomainStatus
  validState: TValidState
}
const SetupDomain: FC<TProps> = ({ status, validState }) => {
  const { raw } = status
  const { isRawValid } = validState

  return (
    <Wrapper>
      <IntroTitle>
        <DomainIcon />
        社区的子域名
        <StepHint>2 / 4</StepHint>
      </IntroTitle>
      <InputBox
        value={raw}
        placeholder="my-domain"
        onChange={(e) => inputOnChange(e, 'raw')}
      />
      {!isEmpty(raw) && !isRawValid && (
        <ErrorMsg>仅支持英文、拼音或数字组合</ErrorMsg>
      )}
      <NextBtn>
        <ArrowButton
          size={SIZE.MEDIUM}
          direction="left"
          onClick={pervStep}
          dimWhenIdle
        >
          上一步
        </ArrowButton>
        <ArrowButton
          size={SIZE.MEDIUM}
          onClick={nextStep}
          disabled={!isRawValid}
        >
          下一步
        </ArrowButton>
      </NextBtn>
    </Wrapper>
  )
}

export default memo(SetupDomain)
