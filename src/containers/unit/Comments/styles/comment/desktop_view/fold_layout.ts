import styled from 'styled-components'

import Img from '@/Img'
import css, { theme } from '@/utils/css'

import PinSVG from '@/icons/Pin'

import { CreateDate as HeaderCreateDate } from '../header'

export const Wrapper = styled.div`
  position: relative;
  ${css.flex('align-center')};
  margin-left: 2px;
  margin-right: 5px;
  padding-top: 20px;
  position: relative;
  background: transparent;
  cursor: pointer;
`
export const Avatar = styled(Img)`
  ${css.circle(16)};
  opacity: ${theme('avatar.opacity')};
  margin-right: 10px;
`
export const CommentBody = styled.div`
  color: ${theme('thread.articleDigest')};
  ${css.cutRest('320px')};
  font-size: 14px;
`
export const RepliesHint = styled.div`
  color: ${theme('thread.extraInfo')};
  font-size: 12px;
  margin-right: 6px;
`
export const CreateDate = styled(HeaderCreateDate)`
  margin-right: 4px;
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
export const BadgePopContent = styled.div`
  padding: 5px 10px;
  font-size: 12px;
`
export const AuthorUpvotedIcon = styled(Img)`
  ${css.size(14)};
  fill: ${theme('comment.icon')};
  opacity: 0.6;
  margin-top: 3px;
`
export const SolutionIcon = styled(Img)<{ isAuthorUpvoted: boolean }>`
  ${css.size(14)};
  fill: ${theme('baseColor.green')};
  margin-top: ${({ isAuthorUpvoted }) => (isAuthorUpvoted ? '7px' : '3px')};
  margin-left: 1px;
`
export const CommentBodyInfo = styled.div`
  ${css.flexColumn()};
  width: 100%;
`
export const CommentContent = styled.div`
  font-size: 14px;
  margin-left: 1px;
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
