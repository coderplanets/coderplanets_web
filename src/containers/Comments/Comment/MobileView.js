import React from 'react'
import { isEmpty } from 'ramda'

import { Global } from '@/utils'

import { Br } from '@/components/Common'
import MarkDownRender from '@/components/MarkDownRender'

import UpInfo from './UpInfo'
import Header from './Header'
import ReplyBar from './ReplyBar'
import DeleteMask from './DeleteMask'
import Footer from './Footer'

import {
  Wrapper,
  CommentWrapper,
  HeaderWrapper,
  CommentContent,
  CommentBodyInfo,
} from './styles/mobile_view'

const getSelection = () => {
  const selectText = Global.getSelection().toString()
  if (!isEmpty(selectText)) {
    // TODO: then use window.getSelection().getRangeAt(0).getBoundingClientRect() to draw a button
  }
}

const MobileView = ({ data, tobeDeleteId, accountInfo }) => {
  return (
    <Wrapper>
      <DeleteMask show={data.id === tobeDeleteId} />
      <CommentWrapper tobeDelete={data.id === tobeDeleteId}>
        <HeaderWrapper>
          <UpInfo data={data} />
          <Header data={data} />
        </HeaderWrapper>
        <Br top="16px" />
        <CommentBodyInfo onMouseUp={getSelection}>
          <CommentContent>
            {data.replyTo && (
              <>
                <ReplyBar data={data.replyTo} />
                <Br top="14px" />
              </>
            )}
            <MarkDownRender body={data.body} />
          </CommentContent>

          <Footer data={data} accountInfo={accountInfo} />
        </CommentBodyInfo>
      </CommentWrapper>
    </Wrapper>
  )
}

export default React.memo(MobileView)
