import { FC, memo } from 'react'

import { SIZE } from '@/constant'
import { nilOrEmpty } from '@/utils/validator'

import OSSUploader from '@/widgets/OSSUploader'
import ArrowButton from '@/widgets/Buttons/ArrowButton'
import { Br } from '@/widgets/Common'

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
} from '../../styles/banner/setup_info'

import { pervStep, nextStep, inputOnChange } from '../../logic'

type TProps = {
  status: {
    titleValue: string
    descValue: string
  }
}

const SetupInfo: FC<TProps> = ({ status }) => {
  const { titleValue, descValue } = status
  const cover = null

  return (
    <Wrapper>
      <IntroTitle>
        <ApplyIcon />
        社区基本信息
        <StepHint>3 / 4</StepHint>
      </IntroTitle>
      <InfoWrapper>
        <OSSUploader onUploadDone={(url) => console.log(url)}>
          {nilOrEmpty(cover) ? (
            <HolderWrapper>
              <HolderIcon />
            </HolderWrapper>
          ) : (
            <RealCover src={cover} />
          )}
        </OSSUploader>
        <InputsWrapper>
          <InputBox
            value={titleValue}
            placeholder="社区名称"
            onChange={(e) => inputOnChange(e, 'titleValue')}
          />
          <Br bottom={10} />
          <InputBox
            value={descValue}
            placeholder="社区一句话描述"
            onChange={(e) => inputOnChange(e, 'descValue')}
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
        <ArrowButton size={SIZE.MEDIUM} onClick={nextStep}>
          下一步
        </ArrowButton>
      </NextBtn>
    </Wrapper>
  )
}

export default memo(SetupInfo)
