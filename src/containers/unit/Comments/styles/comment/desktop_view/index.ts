import styled from 'styled-components'

import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'
import animate from '@/utils/animations'

import PinSVG from '@/icons/Pin'
import UserBadge from '@/icons/UserBadge'

type TWrapper = {
  isPinned: boolean
}

export const Wrapper = styled.div<TWrapper>`
  position: relative;
  ${css.flex()};
  padding-top: ${({ isPinned }) => (isPinned ? '24px' : '20px')};
  position: relative;
  background: transparent;
`
export const PinState = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  ${css.flex('align-center')};
  margin-left: 1px;
`
export const PinIcon = styled(PinSVG)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(14)};
  opacity: 0.9;
  transform: rotate(-30deg);
`
export const PinText = styled.div`
  font-size: 12px;
  color: ${theme('thread.articleDigest')};
  margin-left: 15px;
  opacity: 0.8;
`

export const CommentWrapper = styled.div`
  ${css.flexGrow()};
  width: 100%;
`
export const SidebarWrapper = styled.div`
  color: ${theme('thread.articleTitle')};
  ${css.flexColumn('align-start')};
  height: 100%;
  min-width: 28px;
`
export const BadgePopContent = styled.div`
  padding: 5px 10px;
  font-size: 12px;
`
export const AuthorUpvotedIcon = styled(UserBadge)`
  ${css.size(14)};
  fill: ${theme('comment.icon')};
  opacity: 0.8;
  margin-top: 4px;
  margin-left: 1px;
  animation: ${animate.zoomIn} 0.2s linear;
`
export const SolutionIcon = styled(Img)<{ isAuthorUpvoted: boolean }>`
  ${css.size(14)};
  fill: ${theme('baseColor.green')};
  margin-top: ${({ isAuthorUpvoted }) => (isAuthorUpvoted ? '7px' : '3px')};
  margin-left: 1px;
`
export const IndentLine = styled.div`
  flex-grow: 1;
  width: 20px;
  height: 100%;
  border-left: 1px dashed;
  border-left-color: ${theme('comment.indentLine')};
  margin-left: 8px;
  margin-top: 8px;
  opacity: 1;

  ${SidebarWrapper}:hover & {
    opacity: 1;
    cursor: pointer;
    border-left: 1px solid;
    border-left-color: ${theme('comment.indentActive')};
  }

  ${CommentWrapper}:hover & {
    opacity: 1;
  }

  transition: all 0.25s;
`
export const CommentBodyInfo = styled.div`
  ${css.flexColumn()};
  width: 100%;
`
export const CommentContent = styled.div`
  margin-left: 4px;
`
export const LikeIcon = styled(Img)`
  fill: ${theme('comment.icon')};
  margin-right: 3px;
  margin-top: 2px;
  ${css.size(20)};
`
export const ReplyIcon = styled(Img)`
  fill: ${theme('comment.icon')};
  margin-right: 5px;
  margin-top: 1px;
  ${css.size(18)};
`

export const ReplyAction = styled.div`
  ${css.flex()};
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
