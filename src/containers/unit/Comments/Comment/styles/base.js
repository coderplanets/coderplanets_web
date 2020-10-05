import styled from 'styled-components'

import { theme, cs } from '@/utils'

export const ReplyBarBase = styled.div`
  ${cs.flex('align-center')};
  color: ${theme('comment.reply')};
  background: ${theme('comment.replyBg')};
  border-radius: 3px;
  padding: 5px 8px;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
`
export const ReplyToBodyBase = styled.span`
  color: ${theme('comment.title')};
  margin-left: 10px;
  margin-right: 20px;
  flex-grow: 1;
  font-style: italic;

  ${cs.truncate('350px')};

  ${cs.media.mobile`
    ${cs.truncate('120px')};
  `};
`
export const ReplyToFloorBase = styled.div`
  color: ${theme('comment.floor')};
  margin-right: 5px;
`
