import styled from 'styled-components'

import Img from '@components/Img'
import { theme, cs } from '@utils'

export const Wrapper = styled.div`
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

export const CommentBodyInfo = styled.div`
  ${cs.flexColumn()};
  width: 100%;
`
export const CommentContent = styled.div`
  font-size: 0.9rem;

  ${cs.media.mobile`
    max-width: 280px;
  `};
`
export const CommentFooter = styled.div`
  ${cs.flex()};
  margin-top: 15px;
`
export const LikeIcon = styled(Img)`
  fill: ${theme('comment.icon')};
  margin-right: 3px;
  margin-top: 2px;
  width: 20px;
  height: 20px;
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
