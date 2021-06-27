import { FC, memo } from 'react'

import type { TAccount, TComment } from '@/spec'
import { ICON } from '@/config'

import { SpaceGrow } from '@/components/Common'

import {
  Wrapper,
  ActionWrapper,
  ReplyAction,
  ActionIcon,
} from '../styles/comment/actions'
import { openUpdateEditor, openReplyEditor, onDelete } from '../logic'

type TProps = {
  data: TComment
  accountInfo: TAccount
}

const Actions: FC<TProps> = ({ data, accountInfo }) => {
  if (String(data.author.id) === accountInfo.id) {
    return (
      <Wrapper>
        <ReplyAction onClick={() => openUpdateEditor(data)}>编辑</ReplyAction>
        <ReplyAction onClick={() => onDelete(data)}>删除</ReplyAction>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <ReplyAction onClick={() => openReplyEditor(data)}>回复</ReplyAction>
      <SpaceGrow />
      <ActionWrapper>
        <ActionIcon src={`${ICON}/article/share.svg`} />
      </ActionWrapper>
      <ActionWrapper>
        <ActionIcon src={`${ICON}/shape/quote.svg`} />
      </ActionWrapper>
      <ActionWrapper>
        <ActionIcon src={`${ICON}/article/report.svg`} />
      </ActionWrapper>
    </Wrapper>
  )
}

export default memo(Actions)
