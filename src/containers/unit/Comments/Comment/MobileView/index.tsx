import { memo } from 'react'

import { Br } from '@/widgets/Common'
import MarkDownRender from '@/widgets/MarkDownRender'
import Upvote from '@/widgets/Upvote'

import ReplyBar from '../ReplyBar'
import Footer from '../Footer'

import Header from './Header'

import {
  Wrapper,
  CommentWrapper,
  HeaderWrapper,
  CommentContent,
  CommentBodyInfo,
} from '../../styles/comment/mobile_view/index'

const MobileView = ({ data, accountInfo }) => {
  return (
    <Wrapper>
      <CommentWrapper>
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
