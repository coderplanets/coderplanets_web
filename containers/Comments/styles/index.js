import styled from 'styled-components'

import { theme } from '../../../utils'

export const Wrapper = styled.div``

export const ReplyBarBase = styled.div`
  color: ${theme('comment.reply')};
  background: ${theme('comment.replyBg')};
  border-radius: 3px;
  padding: 5px 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 8px;
  display: flex;
`
export const ReplyToBodyBase = styled.div`
  color: #93b3b5;
  margin-left: 10px;
  margin-right: 20px;
  width: 350px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-style: italic;
  flex-grow: 1;
`
export const ReplyToFloorBase = styled.div`
  color: ${theme('comment.floor')};
  margin-right: 5px;
`
