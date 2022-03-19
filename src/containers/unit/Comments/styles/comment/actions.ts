import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import { Wrapper as CommentWrapper } from './desktop_view'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  width: 100%;

  ${css.media.mobile`
    font-size: 12px;
  `};
`
export const ReplyAction = styled.div`
  color: ${theme('comment.action')};

  &:hover {
    color: ${theme('thread.articleTitle')};
    cursor: pointer;
  }

  transition: all 0.2s;
`
export const MoreWrapper = styled.div`
  opacity: 0;

  ${CommentWrapper}:hover & {
    opacity: 1;
  }

  transition: all 0.2s;
`
