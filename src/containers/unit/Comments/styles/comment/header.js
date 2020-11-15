import styled from 'styled-components'

import Img from '@/Img'
import { theme, css } from '@/utils'

import { Wrapper as CommentBlock } from './desktop_view'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 10px;
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

  transition: opacity 0.25s;
`
export const CommentHeaderFirst = styled.div`
  ${css.flex()};
`
export const Avatar = styled(Img)`
  ${css.circle(22)};
  opacity: ${theme('avatarOpacity')};
  margin-right: 10px;
`
export const HeaderBaseInfo = styled.div`
  ${css.flexColumn()};
  width: 100%;
`
export const CommentUserName = styled.div`
  ${css.flexGrow('align-center')};
  color: ${theme('comment.username')};
  font-size: 14px;
`
export const ReplyUsers = styled.div`
  ${css.flex()};
  margin-top: -4px;
`
export const ReplyTitle = styled.div`
  color: ${theme('comment.reply')};
  margin-top: 4px;
  margin-right: 5px;
`
