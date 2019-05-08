import React from 'react'
import R from 'ramda'

import { Global } from '@utils'

import MarkDownRender from '@components/MarkDownRender'

import CommentHeader from './CommentHeader'
import CommentReplyBar from './CommentReplyBar'
import DeleteMask from './DeleteMask'
import Reactions from './Reactions'

import {
  Wrapper,
  CommentWrapper,
  CommentUserInfo,
  CommentAvatar,
  CommentContent,
  CommentBodyInfo,
  CommentFooter,
} from './styles/comment'

const getSelection = () => {
  const selectText = Global.getSelection().toString()
  if (!R.isEmpty(selectText)) {
    // TODO: then use window.getSelection().getRangeAt(0).getBoundingClientRect() to draw a button
  }
}

const Comment = ({ data, tobeDeleteId, accountInfo }) => (
  <Wrapper>
    <DeleteMask show={data.id === tobeDeleteId} />
    <CommentWrapper tobeDelete={data.id === tobeDeleteId}>
      <CommentUserInfo>
        <CommentAvatar src={data.author.avatar} />
      </CommentUserInfo>

      <CommentBodyInfo onMouseUp={getSelection}>
        <CommentHeader data={data} />
        <CommentContent>
          {data.replyTo && <CommentReplyBar data={data.replyTo} />}
          <MarkDownRender body={data.body} />
        </CommentContent>
        <CommentFooter>
          <Reactions data={data} accountInfo={accountInfo} />
        </CommentFooter>
      </CommentBodyInfo>
    </CommentWrapper>
  </Wrapper>
)

export default Comment
