import styled from 'styled-components'

import { theme, css } from '@/utils'
// import { CommentBodyInfo } from './index'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  width: 100%;

  ${css.media.mobile`
    font-size: 12px;
  `};
`
export const ReplyAction = styled.div`
  color: ${theme('comment.action')};
`
