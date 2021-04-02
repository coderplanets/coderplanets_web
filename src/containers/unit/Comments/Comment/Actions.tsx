import React from 'react'

import type { TAccount, TComment } from '@/spec'

import { Wrapper, ReplyAction } from '../styles/comment/actions'
import { openUpdateEditor, openReplyEditor, onDelete } from '../logic'

type TProps = {
  data: TComment
  accountInfo: TAccount
}

const Actions: React.FC<TProps> = ({ data, accountInfo }) => {
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
    </Wrapper>
  )
}

export default React.memo(Actions)
