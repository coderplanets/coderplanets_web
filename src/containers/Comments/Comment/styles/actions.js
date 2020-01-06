import styled from 'styled-components'

import Img from '@components/Img'
import { theme, cs } from '@utils'
// import { CommentBodyInfo } from './index'

export const Wrapper = styled.div`
  ${cs.flex()};
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
  opacity: 1;

  /* ${CommentBodyInfo}:hover & {
    opacity: 1;
  } */
  transition: opacity 0.3s;
`
