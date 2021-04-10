import styled from 'styled-components'

import Img from '@/Img'
import { theme, css } from '@/utils'

import PinSVG from '@/SvgIcons/PinSVG'

export const Wrapper = styled.div<{ pined: boolean }>`
  position: relative;
  ${css.flex()};
  margin-bottom: 14px;
  padding: 15px 5px;
  padding-top: ${({ pined }) => (pined ? '24px' : '15px')};
  position: relative;
  background: transparent;
  border-bottom: 1px solid;
  border-bottom-color: #0b4252;
`
export const PinState = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  ${css.flex('align-center')};
  margin-left: 5px;
`
export const PinIcon = styled(PinSVG)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(14)};
  opacity: 0.8;
  transform: rotate(-30deg);
`
export const PinText = styled.div`
  font-size: 12px;
  color: ${theme('thread.articleDigest')};
  margin-left: 12px;
  opacity: 0.8;
`

// filter: blur(3px);
export const CommentWrapper = styled.div<{ tobeDelete: boolean }>`
  ${css.flexGrow()};
  filter: ${({ tobeDelete }) => (tobeDelete ? 'blur(3px)' : '')};
`
export const CommentBodyInfo = styled.div`
  ${css.flexColumn()};
  width: 100%;
`
export const CommentContent = styled.div`
  font-size: 0.9rem;
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
