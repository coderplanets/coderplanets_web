import React from 'react'

import { ICON_CMD } from '@config'

import { Wrapper, ReplyIcon, ReplyAction } from './styles/actions'
import { openUpdateEditor, openReplyEditor, onDelete } from './logic'

const Actions = ({ data, accountInfo }) => {
  if (String(data.author.id) === accountInfo.id) {
    return (
      <Wrapper>
        <ReplyAction onClick={openUpdateEditor.bind(this, data)}>
          <ReplyIcon src={`${ICON_CMD}/edit.svg`} />
          编辑
        </ReplyAction>
        <ReplyAction onClick={onDelete.bind(this, data)}>
          <ReplyIcon src={`${ICON_CMD}/delete.svg`} />
          删除
        </ReplyAction>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <ReplyAction onClick={openReplyEditor.bind(this, data)}>
        <ReplyIcon src={`${ICON_CMD}/nest_comment.svg`} />
        回复
      </ReplyAction>
    </Wrapper>
  )
}

export default Actions
