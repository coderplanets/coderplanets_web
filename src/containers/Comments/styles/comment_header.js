import styled from 'styled-components'

import Img from '@Img'
import { theme, cs } from '@utils'

export const Wrapper = styled.div`
  ${cs.flex()};
  margin-bottom: 5px;
  margin-top: -1px;
`

export const FloorNum = styled.div`
  color: ${theme('comment.floor')};
  font-size: 1rem;
  align-self: center;
  margin-left: 5px;
  flex-grow: 1;
`

export const MobileAvatar = styled.div`
  display: none;
  ${cs.media.mobile`
    display: block;
    margin-top: 3px;
    margin-right: 10px;
`};
`

export const CommentHeaderFirst = styled.div`
  ${cs.flex()};
`

export const CommentAvatar = styled(Img)`
  ${cs.circle('38px')};
  opacity: ${theme('avatarOpacity')};
`

export const HeaderBaseInfo = styled.div`
  ${cs.flexColumn()};
  width: 100%;
`

export const CommentUserName = styled.div`
  ${cs.flexGrow()};

  color: ${theme('comment.username')};
  font-size: 1rem;
`

export const TimeStamps = styled.div`
  color: ${theme('comment.placeholder')};
  font-size: 0.9rem;
`

export const ReplyUsers = styled.div`
  ${cs.flex()};
  margin-top: -4px;
`
export const ReplyTitle = styled.div`
  color: ${theme('comment.reply')};
  margin-top: 4px;
  margin-right: 5px;
`
