import { FC, memo, Fragment } from 'react'
import { isEmpty } from 'ramda'

import type { TComment } from '@/spec'
import { Global } from '@/utils/helper'
import { ICON } from '@/config'

import Tooltip from '@/widgets/Tooltip'
import Upvote from '@/widgets/Upvote'
import ArtimentBody from '@/widgets/ArtimentBody'

import Header from '../Header'
import ReplyBar from '../ReplyBar'
import Footer from '../Footer'
import IllegalBar from './IllegalBar'

import type { TAPIMode } from '../../spec'

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
import { foldComment, handleUpvote } from '../../logic'

const getSelection = () => {
  const selectText = Global.getSelection().toString()
  if (!isEmpty(selectText)) {
    // TODO: then use window.getSelection().getRangeAt(0).getBoundingClientRect() to draw a button
  }
}

type TProps = {
  data: TComment
  apiMode: TAPIMode
  isReply?: boolean
  showInnerRef?: boolean
}

const DefaultLayout: FC<TProps> = ({
  data,
  isReply = false,
  showInnerRef = false,
  apiMode,
}) => {
  const { isPinned, meta } = data
  const { isArticleAuthorUpvoted, isLegal, illegalReason, illegalWords } = meta
  const isSolution = false

  return (
    <Wrapper isPinned={isPinned}>
      {isPinned && (
        <PinState>
          <PinIcon />
          <PinText>置顶讨论</PinText>
        </PinState>
      )}
      <CommentWrapper>
        <SidebarWrapper>
          <Upvote
            type="comment"
            count={data.upvotesCount}
            viewerHasUpvoted={data.viewerHasUpvoted}
            onAction={(did) => handleUpvote(data, did)}
          />
          {isArticleAuthorUpvoted && (
            <Tooltip
              content={<BadgePopContent>作者赞过</BadgePopContent>}
              placement="bottom"
              noPadding
            >
              <AuthorUpvotedIcon />
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
          <Header data={data} showInnerRef={showInnerRef} apiMode={apiMode} />
          <CommentContent>
            {isLegal ? (
              <Fragment>
                {!isReply && data.replyTo && <ReplyBar data={data.replyTo} />}
                <ArtimentBody
                  document={{ bodyHtml: data.bodyHtml }}
                  initLineClamp={6}
                  mode="comment"
                />
              </Fragment>
            ) : (
              <IllegalBar
                illegalReason={illegalReason}
                illegalWords={illegalWords}
              />
            )}

            {/* <IllegalBar /> */}
          </CommentContent>
          <Footer data={data} apiMode={apiMode} />
        </CommentBodyInfo>
      </CommentWrapper>
    </Wrapper>
  )
}

export default memo(DefaultLayout)
