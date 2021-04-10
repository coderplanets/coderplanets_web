import React from 'react'
import { isEmpty } from 'ramda'

import type { TAccount, TComment } from '@/spec'
import { Global } from '@/utils'

import MarkDownRender from '@/components/MarkDownRender'

import Upvote from './Upvote'
import Header from './Header'
import ReplyBar from './ReplyBar'
import DeleteMask from './DeleteMask'
import Footer from './Footer'

import {
  Wrapper,
  CommentWrapper,
  CommentContent,
  CommentBodyInfo,
  PinState,
  PinIcon,
  PinText,
} from '../styles/comment/desktop_view'

const getSelection = () => {
  const selectText = Global.getSelection().toString()
  if (!isEmpty(selectText)) {
    // TODO: then use window.getSelection().getRangeAt(0).getBoundingClientRect() to draw a button
  }
}

type TProps = {
  data: TComment
  accountInfo: TAccount
  tobeDeleteId: string
}

const Comment: React.FC<TProps> = ({ data, tobeDeleteId, accountInfo }) => {
  const pined = data.id === '360' || data.id === '377'

  return (
    <Wrapper pined={pined}>
      {pined && (
        <PinState>
          <PinIcon />
          <PinText>置顶评论</PinText>
        </PinState>
      )}
      <DeleteMask show={data.id === tobeDeleteId} />
      <CommentWrapper tobeDelete={data.id === tobeDeleteId}>
        <Upvote data={data} />

        <CommentBodyInfo onMouseUp={getSelection}>
          <Header data={data} />
          <CommentContent>
            {data.replyTo && <ReplyBar data={data.replyTo} />}
            <MarkDownRender body={data.body} />
          </CommentContent>
          <Footer data={data} accountInfo={accountInfo} />
        </CommentBodyInfo>
      </CommentWrapper>
    </Wrapper>
  )
}

export default React.memo(Comment)
