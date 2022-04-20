import { FC, memo } from 'react'

import type { TComment } from '@/spec'
import { Br } from '@/widgets/Common'
import Upvote from '@/widgets/Upvote'
import ArtimentBody from '@/widgets/ArtimentBody'

import type { TAPIMode } from '../../spec'
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

type TProps = {
  data: TComment
  apiMode: TAPIMode
}

const MobileView: FC<TProps> = ({ data, apiMode }) => {
  return (
    <Wrapper>
      <CommentWrapper>
        <HeaderWrapper>
          <Header data={data} apiMode={apiMode} />
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
            <ArtimentBody
              document={{ bodyHtml: data.bodyHtml }}
              initLineClamp={6}
              mode="comment"
            />
          </CommentContent>
          <Footer data={data} apiMode={apiMode} />
        </CommentBodyInfo>
      </CommentWrapper>
      <Upvote />
    </Wrapper>
  )
}

export default memo(MobileView)
