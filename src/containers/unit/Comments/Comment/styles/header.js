import styled from 'styled-components'

import Img from '@/Img'
import { theme, cs } from '@/utils'

import { Wrapper as CommentBlock } from './desktop_view'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};
  margin-bottom: 10px;

  ${cs.media.mobile`
    margin-bottom: 0;
    margin-left: 5px;
  `};
`
export const FloorNum = styled.div`
  color: ${theme('comment.floor')};
  font-size: 14px;
  flex-grow: 1;
  letter-spacing: 1.5px;
  margin-top: 2px;
  opacity: 0.6;

  ${CommentBlock}:hover & {
    opacity: 1;
  }

  ${cs.media.mobile`
    opacity: 1;
  `};
  transition: opacity 0.25s;
`
export const CommentHeaderFirst = styled.div`
  ${cs.flex()};
`
export const Avatar = styled(Img)`
  ${cs.circle('22px')};
  opacity: ${theme('avatarOpacity')};
  display: block;
  margin-right: 10px;
`

export const HeaderBaseInfo = styled.div`
  ${cs.flexColumn()};
  width: 100%;
`
export const CommentUserName = styled.div`
  ${cs.flexGrow('align-center')};

  color: ${theme('comment.username')};
  font-size: 1rem;
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
