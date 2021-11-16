import { FC, memo } from 'react'

import { SIZE } from '@/constant'
import { nilOrEmpty } from '@/utils/validator'

import OSSUploader from '@/widgets/OSSUploader'
import ArrowButton from '@/widgets/Buttons/ArrowButton'
import { Br, Space } from '@/widgets/Common'

import {
  Wrapper,
  IntroTitle,
  ApplyIcon,
  StepHint,
  NextBtn,
  InfoWrapper,
  HolderWrapper,
  HolderIcon,
  RealCover,
  InputsWrapper,
  InputBox,
} from '../styles/banner/setup_info'

import type { TSetupInfoStatus, TValidState } from '../spec'
import { pervStep, nextStep, inputOnChange } from '../logic'

type TProps = {
  status: TSetupInfoStatus
  validState: TValidState
}

const SetupInfo: FC<TProps> = ({ status, validState }) => {
  const { title, desc, logo } = status

  const { isTitleValid, isDescValid, isLogoValid } = validState
  const isValid = isTitleValid && isDescValid && isLogoValid

  return (
    <Wrapper>
      <IntroTitle>
        <ApplyIcon />
        基本信息
        <StepHint>3 / 4</StepHint>
      </IntroTitle>
      <InfoWrapper>
        <OSSUploader onUploadDone={(url) => inputOnChange(url, 'logo')}>
          {nilOrEmpty(logo) ? (
            <HolderWrapper>
              <HolderIcon />
            </HolderWrapper>
          ) : (
            <RealCover src={logo} />
          )}
        </OSSUploader>
        <InputsWrapper>
          <InputBox
            value={title}
            placeholder="// 社区名称"
            onChange={(e) => inputOnChange(e, 'title')}
          />
          <Br bottom={10} />
          <InputBox
            value={desc}
            placeholder="// 社区一句话描述"
            onChange={(e) => inputOnChange(e, 'desc')}
          />
        </InputsWrapper>
      </InfoWrapper>

      <NextBtn>
        <ArrowButton
          size={SIZE.MEDIUM}
          direction="left"
          onClick={pervStep}
          dimWhenIdle
        >
          上一步
        </ArrowButton>
        <Space right={30} />
        <ArrowButton size={SIZE.MEDIUM} onClick={nextStep} disabled={!isValid}>
          下一步
        </ArrowButton>
      </NextBtn>
    </Wrapper>
  )
}

export default memo(SetupInfo)
