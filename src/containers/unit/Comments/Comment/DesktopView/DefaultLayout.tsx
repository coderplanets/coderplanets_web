import { FC, memo } from 'react'
import { isEmpty } from 'ramda'

import type { TAccount, TComment } from '@/spec'
import { Global } from '@/utils'
import { ICON } from '@/config'

import MarkDownRender from '@/components/MarkDownRender'
import Tooltip from '@/components/Tooltip'
import Upvote from '@/components/Upvote'

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
  const pined = data.id === '360' || data.id === '377'
  const isAuthorUpvoted =
    data.id === '377' || data.id === '355' || data.id === '359'
  const isSolution = data.id === '358' || data.id === '355'

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
        <SidebarWrapper>
          <Upvote type="comment" />
          {isAuthorUpvoted && (
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
                isAuthorUpvoted={isAuthorUpvoted}
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
            <MarkDownRender body={data.body} />
          </CommentContent>
          <Footer data={data} accountInfo={accountInfo} />
        </CommentBodyInfo>
      </CommentWrapper>
    </Wrapper>
  )
}

export default memo(DefaultLayout)
