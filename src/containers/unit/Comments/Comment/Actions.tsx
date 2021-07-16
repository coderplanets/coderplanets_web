import { FC, memo } from 'react'

import type { TAccount, TComment } from '@/spec'

import { IconButton } from '@/components/Buttons'
import { SpaceGrow } from '@/components/Common'

import { Wrapper, ReplyAction } from '../styles/comment/actions'
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
      <IconButton path="article/share.svg" size={13} />
      <IconButton path="shape/quote.svg" size={13} />
      <IconButton path="article/report.svg" size={13} />
    </Wrapper>
  )
}

export default memo(Actions)
