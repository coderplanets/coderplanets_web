import React from 'react'
import R from 'ramda'

import { Global } from '@utils'

import MarkDownRender from '@components/MarkDownRender'

import UpInfo from './UpInfo'
import Header from './Header'
import ReplyBar from './ReplyBar'
import DeleteMask from './DeleteMask'
import Footer from './Footer'

import {
  Wrapper,
  CommentWrapper,
  CommentContent,
  CommentBodyInfo,
  CommentFooter,
} from './styles'

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
      <UpInfo data={data} />

      <CommentBodyInfo onMouseUp={getSelection}>
        <Header data={data} />
        <CommentContent>
          {data.replyTo && <ReplyBar data={data.replyTo} />}
          <MarkDownRender body={data.body} />
        </CommentContent>

        <Footer data={data} accountInfo={accountInfo}></Footer>
      </CommentBodyInfo>
    </CommentWrapper>
  </Wrapper>
)

export default Comment
