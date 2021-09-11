import { FC, memo } from 'react'
import { isEmpty, includes } from 'ramda'

import type { TAccount, TComment, TID } from '@/spec'
import { Global } from '@/utils/helper'
import { ICON } from '@/config'

import Tooltip from '@/components/Tooltip'
import Upvote from '@/components/Upvote'
import ArtimentBody from '@/components/ArtimentBody'

import Header from '../Header'
import ReplyBar from '../ReplyBar'
import DeleteMask from '../DeleteMask'
import Footer from '../Footer'

import {
  Wrapper,
  CommentWrapper,
  SidebarWrapper,
  CommentContent,
  CommentBodyInfo,
  PinState,
  PinIcon,
  PinText,
  AuthorUpvotedIcon,
  SolutionIcon,
  BadgePopContent,
  IndentLine,
} from '../../styles/comment/desktop_view'
import { foldComment } from '../../logic'

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
  isReply?: boolean
}

const DefaultLayout: FC<TProps> = ({
  data,
  tobeDeleteId,
  accountInfo,
  isReply = false,
}) => {
  const { isPinned, meta } = data
  const { isArticleAuthorUpvoted } = meta
  const isSolution = false

  return (
    <Wrapper isPinned={isPinned}>
      {isPinned && (
        <PinState>
          <PinIcon />
          <PinText>置顶评论</PinText>
        </PinState>
      )}
      <DeleteMask show={data.id === tobeDeleteId} />
      <CommentWrapper tobeDelete={data.id === tobeDeleteId}>
        <SidebarWrapper>
          <Upvote type="comment" count={data.upvotesCount} />
          {isArticleAuthorUpvoted && (
            <Tooltip
              content={<BadgePopContent>作者顶过</BadgePopContent>}
              placement="bottom"
              noPadding
            >
              <AuthorUpvotedIcon src={`${ICON}/article/author_upvoted.svg`} />
            </Tooltip>
          )}
          {isSolution && (
            <Tooltip
              content={<BadgePopContent>最佳答案</BadgePopContent>}
              placement="bottom"
              noPadding
            >
              <SolutionIcon
                isAuthorUpvoted={isArticleAuthorUpvoted}
                src={`${ICON}/shape/solution-check.svg`}
              />
            </Tooltip>
          )}
          {isReply && <IndentLine onClick={() => foldComment(data.id)} />}
        </SidebarWrapper>

        <CommentBodyInfo onMouseUp={getSelection}>
          <Header data={data} />
          <CommentContent>
            {data.replyTo && <ReplyBar data={data.replyTo} />}
            <ArtimentBody
              document={{ bodyHtml: data.bodyHtml }}
              mode="comment"
            />
          </CommentContent>
          <Footer data={data} accountInfo={accountInfo} />
        </CommentBodyInfo>
      </CommentWrapper>
    </Wrapper>
  )
}

export default memo(DefaultLayout)
