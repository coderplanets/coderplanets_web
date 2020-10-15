import styled from 'styled-components'

import { theme, css } from '@/utils'
// import { CommentBodyInfo } from './index'

export const Wrapper = styled.div`
  ${css.flex()};
`

export const ReplyAction = styled.div`
  ${css.flex()};
  color: ${theme('comment.action')};
  margin-right: 12px;
  cursor: pointer;
  font-weight: bold;
  opacity: 1;

  transition: opacity 0.3s;
`
