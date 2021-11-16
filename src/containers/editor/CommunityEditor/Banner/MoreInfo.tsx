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

import type { TSetupInfoStatus, TValidState, TCommunityType } from '../spec'
import { TRANS, COMMUNITY_TYPE } from '../constant'
import { pervStep, applyCommunity, inputOnChange } from '../logic'

type TNote = {
  communityType: TCommunityType
}

const TheNotes: FC<TNote> = ({ communityType }) => {
  switch (communityType) {
    case COMMUNITY_TYPE.PUBLIC: {
      return <Notes>官网 / github 主页等介绍性信息。</Notes>
    }

    case COMMUNITY_TYPE.CITY: {
      return <Notes>目前仅支持 IT / 创意产业较为发达的地区城市。</Notes>
    }

    case COMMUNITY_TYPE.TEAM: {
      return (
        <Notes>
          团队主页 / github 或相关社交平台链接，如果已经在
          <Link href={`/${ROUTE.WORKS}`} passHref>
            <NoteLink target="_blank">作品集市</NoteLink>
          </Link>
          发布过作品，请一并附上。
        </Notes>
      )
    }

    default: {
      return (
        <Notes>
          作品主页或相关社交平台链接，如果你已经在
          <Link href={`/${ROUTE.WORKS}`} passHref>
            <NoteLink target="_blank">作品集市</NoteLink>
          </Link>
          发布过作品，请一并附上。
        </Notes>
      )
    }
  }
}

type TProps = {
  status: TSetupInfoStatus
  validState: TValidState
  communityType: TCommunityType
}

const MoreInfo: FC<TProps> = ({ status, validState, communityType }) => {
  const { applyMsg } = status
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
          value={applyMsg}
          placeholder="// 更多信息"
          behavior="textarea"
          onChange={(e) => inputOnChange(e, 'applyMsg')}
        />
        <TheNotes communityType={communityType} />
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
