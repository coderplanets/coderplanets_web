import React from 'react'

import { Wrapper, ReplyAction } from './styles/actions'
import { openUpdateEditor, openReplyEditor, onDelete } from '../logic'

const Actions = ({ data, accountInfo }) => {
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
