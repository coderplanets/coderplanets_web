import { memo } from 'react'

import { Br } from '@/components/Common'
import MarkDownRender from '@/components/MarkDownRender'
import Upvote from '@/components/Upvote'

import ReplyBar from '../ReplyBar'
import DeleteMask from '../DeleteMask'
import Footer from '../Footer'

import Header from './Header'

import {
  Wrapper,
  CommentWrapper,
  HeaderWrapper,
  CommentContent,
  CommentBodyInfo,
} from '../../styles/comment/mobile_view/index'

const MobileView = ({ data, tobeDeleteId, accountInfo }) => {
  return (
    <Wrapper>
      <DeleteMask show={data.id === tobeDeleteId} />
      <CommentWrapper tobeDelete={data.id === tobeDeleteId}>
        <HeaderWrapper>
          <Header data={data} />
        </HeaderWrapper>
        <Br top={16} />
        <CommentBodyInfo>
          <CommentContent>
            {data.replyTo && (
              <>
                <ReplyBar data={data.replyTo} />
                <Br top={14} />
              </>
            )}
            <MarkDownRender body={data.body} />
          </CommentContent>
          <Footer data={data} />
        </CommentBodyInfo>
      </CommentWrapper>
      <Upvote />
    </Wrapper>
  )
}

export default memo(MobileView)
