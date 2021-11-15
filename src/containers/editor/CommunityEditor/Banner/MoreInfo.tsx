import { FC, memo } from 'react'
import Link from 'next/link'

import { SIZE, ROUTE } from '@/constant'

import { Space } from '@/widgets/Common'
import ArrowButton from '@/widgets/Buttons/ArrowButton'
import Button from '@/widgets/Buttons/Button'

import {
  Wrapper,
  IntroTitle,
  ApplyIcon,
  StepHint,
  NextBtn,
  InputsWrapper,
  Notes,
  NoteLink,
  InputBox,
} from '../styles/banner/more_info'

import type { TValidState, TCommunityType } from '../spec'
import { TRANS } from '../constant'
import { pervStep, applyCommunity, inputOnChange } from '../logic'

type TProps = {
  validState: TValidState
  communityType: TCommunityType
}

const MoreInfo: FC<TProps> = ({ validState, communityType }) => {
  const { submitting } = validState

  return (
    <Wrapper>
      <IntroTitle>
        <ApplyIcon />
        附加信息（可选）
        <StepHint>4 / 4</StepHint>
      </IntroTitle>
      <InputsWrapper>
        <InputBox
          value="TODO"
          placeholder="// 更多信息"
          behavior="textarea"
          onChange={(e) => inputOnChange(e, 'title')}
        />
        <Notes>
          作品主页或相关社交平台链接，如果你已经在
          <Link href={`/${ROUTE.WORKS}`} passHref>
            <NoteLink target="_blank">作品集市</NoteLink>
          </Link>
          发布过作品，请一并附上。
        </Notes>
      </InputsWrapper>

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
        <Button
          size={SIZE.MEDIUM}
          onClick={() => applyCommunity()}
          loading={submitting}
        >
          &nbsp;创建{TRANS[communityType]}社区&nbsp;
        </Button>
      </NextBtn>
    </Wrapper>
  )
}

export default memo(MoreInfo)
