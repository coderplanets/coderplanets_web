import styled from 'styled-components'

import Img from '@/Img'
import { theme, css } from '@/utils'
// import { CommentBodyInfo } from './index'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  width: 100%;

  ${css.media.mobile`
    font-size: 12px;
  `};
`
export const ActionWrapper = styled.div`
  margin-left: 13px;
`
export const ActionIcon = styled(Img)`
  fill: ${theme('comment.action')};
  ${css.size(13)};
  cursor: pointer;
`
export const ReplyAction = styled.div`
  color: ${theme('comment.action')};
`
