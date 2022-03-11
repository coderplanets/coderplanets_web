import styled from 'styled-components'

import Img from '@/Img'
import css, { theme, animate } from '@/utils/css'

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
  margin-left: 7px;
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

  transition: all 0.2s;
`
export const CommentBodyInfo = styled.div`
  ${css.flexColumn()};
  width: 100%;

  ${css.media.mobile`
    width: calc(100vw - 60px);
  `};
`
export const CommentContent = styled.div`
  margin-left: 4px;
`
