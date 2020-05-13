import styled from 'styled-components'

import { theme, cs } from '@/utils'
// import { CommentBodyInfo } from './index'

export const Wrapper = styled.div`
  ${cs.flex()};
`

export const ReplyAction = styled.div`
  ${cs.flex()};
  color: ${theme('comment.action')};
  margin-right: 12px;
  cursor: pointer;
  font-weight: bold;
  opacity: 1;

  transition: opacity 0.3s;
`
