import styled from 'styled-components'

import Img from 'components/Img'
import { theme, animate, cs } from 'utils'
import { ReplyBarBase, ReplyToBodyBase, ReplyToFloorBase } from './index'

export const ReplyBar = styled(ReplyBarBase)`
  margin-left: -2px;
`
export const ReplyToBody = styled(ReplyToBodyBase)``
export const ReplyToFloor = styled(ReplyToFloorBase)``

// min-height: 300px;
export const ListsContainer = styled.div`
  ${cs.flexColumn('')};
  border-radius: 4px;
`

export const TotalHeader = styled.div`
  ${cs.flex('align-center')};
  margin-top: 25px;
  margin-bottom: 10px;
`
export const TotalCountWrapper = styled.div`
  flex-grow: 1;
`

export const ListTitle = styled.div`
  color: ${theme('comment.title')};
  font-size: 1rem;
  margin-left: 2px;
`

export const TotalNum = styled.span`
  color: ${theme('comment.number')};
  font-size: 1.3em;
`

export const FloorNum = styled.div`
  color: ${theme('comment.floor')};
  font-size: 1rem;
  align-self: center;
  margin-left: 5px;
  flex-grow: 1;
`

export const CommentBlock = styled.div`
  ${cs.flex()};
  margin-bottom: 16px;
  padding: 15px;
  padding-left: 20px;
  position: relative;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  border-radius: 3px;
  background: ${theme('preview.articleBg')};
`

// filter: blur(3px);
export const CommentWrapper = styled.div`
  ${cs.flexGrow()};
  filter: ${({ tobeDelete }) => (tobeDelete ? 'blur(3px)' : '')};
`
export const DeleteHintText = styled.div`
  color: ${theme('baseColor.error')};
  font-size: 1.3em;
  margin-bottom: 10px;
`
export const DeleteOverlay = styled.div`
  ${cs.flexColumn('align-both')};

  position: absolute;
  margin-top: -15px;
  margin-left: -20px;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  z-index: 10;
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  animation: ${animate.pulseRule};
`
export const DeleteBtnGroup = styled.div`
  ${cs.flex()};
`
export const CommentUserInfo = styled.div`
  margin-right: 15px;
`
export const CommentAvatar = styled(Img)`
  ${cs.circle('38px')};
  opacity: ${theme('avatarOpacity')};
`
export const CommentHeader = styled.div`
  ${cs.flexColumn()};
  margin-bottom: 5px;
  margin-top: -1px;
`
export const CommentHeaderFirst = styled.div`
  ${cs.flex()};
`
export const CommentUserName = styled.div`
  ${cs.flexGrow()};

  color: ${theme('comment.username')};
  font-size: 1rem;
`
export const TimeStamps = styled.div`
  color: ${theme('comment.placeholder')};
  font-size: 0.9rem;
`
export const CommentBodyInfo = styled.div`
  ${cs.flexColumn()};
  width: 100%;
`
export const CommentContent = styled.div`
  font-size: 0.9rem;
`
export const CommentFooter = styled.div`
  ${cs.flex()};
  margin-top: 15px;
`
export const Actions = styled.div`
  ${cs.flexGrow()};
  margin-left: -4px;
`
export const ReplyUsers = styled.div`
  ${cs.flex()};
  margin-top: -4px;
`
export const ReplyTitle = styled.div`
  color: ${theme('comment.reply')};
  margin-top: 4px;
  margin-right: 5px;
`
export const VisiableAction = styled.div`
  ${cs.flex()};
  color: ${theme('comment.action')};
  margin-right: 10px;
  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
`
export const ActionNumber = styled.div`
  font-size: 1.2em;
  color: ${theme('comment.action')};
`

export const LikeIcon = styled(Img)`
  fill: ${theme('comment.icon')};
  margin-right: 3px;
  margin-top: 2px;
  width: 20px;
  height: 20px;
`

export const UpIcon = styled(Img)`
  fill: ${({ viewerDid }) =>
    viewerDid ? theme('comment.didIcon') : theme('comment.icon')};
  margin-right: 3px;
  margin-top: 2px;
  width: 20px;
  height: 20px;
  transform: ${({ reverse }) => (reverse ? 'rotate(180deg)' : '')};
  ${cs.smokey};
`
export const ReplyIcon = styled(Img)`
  fill: ${theme('comment.icon')};
  margin-right: 5px;
  margin-top: 1px;
  width: 18px;
  height: 18px;
`

export const ReplyAction = styled.div`
  ${cs.flex()};
  color: ${theme('comment.action')};
  margin-right: 12px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 2px;
  opacity: 0;

  ${CommentBodyInfo}:hover & {
    opacity: 1;
  }
  transition: opacity 0.3s;
`
