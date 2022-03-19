import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const ReplyBarBase = styled.div`
  ${css.flex('align-center')};
  color: ${theme('comment.reply')};
  background: ${theme('comment.replyBg')};
  border-radius: 3px;
  padding: 5px 8px;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
  max-width: 580px;
`
export const ReplyToBodyBase = styled.span`
  color: ${theme('comment.title')};
  margin-left: 10px;
  margin-right: 20px;
  flex-grow: 1;
  font-style: italic;

  ${css.cutRest('400px')};

  ${css.media.mobile`
    ${css.cutRest('125px')};
  `};
`
export const ReplyToFloorBase = styled.div`
  color: ${theme('comment.floor')};
  margin-right: 5px;
`
