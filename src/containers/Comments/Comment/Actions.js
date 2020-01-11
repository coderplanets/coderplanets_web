import React from 'react'

import { Wrapper, ReplyAction } from './styles/actions'
import { openUpdateEditor, openReplyEditor, onDelete } from '../logic'

const Actions = ({ data, accountInfo }) => {
  if (String(data.author.id) === accountInfo.id) {
    return (
      <Wrapper>
        <ReplyAction onClick={openUpdateEditor.bind(this, data)}>
          编辑
        </ReplyAction>
        <ReplyAction onClick={onDelete.bind(this, data)}>删除</ReplyAction>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <ReplyAction onClick={openReplyEditor.bind(this, data)}>回复</ReplyAction>
    </Wrapper>
  )
}

export default Actions
