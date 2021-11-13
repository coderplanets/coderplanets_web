import { FC, memo } from 'react'

import { ICON_CMD } from '@/config'
import { SIZE } from '@/constant'

import ArrowButton from '@/widgets/Buttons/ArrowButton'

import InputBox from '../InputBox'

import {
  Wrapper,
  IntroTitle,
  TitleIcon,
  StepHint,
  NextBtn,
} from '../../styles/banner/setup_domain'

import { pervStep, nextStep, inputOnChange } from '../../logic'

type TProps = {
  status: {
    titleValue: string
    descValue: string
  }
}

const SetupInfo: FC<TProps> = ({ status }) => {
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
        onChange={(e) => inputOnChange(e, 'titleValue')}
      />
      <InputBox
        value={descValue}
        placeholder="社区一句话描述"
        onChange={(e) => inputOnChange(e, 'descValue')}
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

export default memo(SetupInfo)
