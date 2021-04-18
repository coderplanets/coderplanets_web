import styled from 'styled-components'

import Img from '@/Img'
import { theme, css } from '@/utils'

import { Wrapper as CommentBlock } from './desktop_view'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 15px;
`
export const Avatar = styled(Img)`
  ${css.circle(24)};
  opacity: ${theme('avatar.opacity')};
  margin-right: 13px;
`
export const HeaderBaseInfo = styled.div`
  ${css.flexColumn()};
  width: 100%;
`
export const BaseInfo = styled.div`
  ${css.flexGrow('align-center')};
  color: ${theme('comment.username')};
`
export const UserName = styled.div`
  ${css.flex('align-center')};
  font-size: 15px;
  flex-grow: 1;
`
export const AuthorTag = styled.div`
  font-size: 11px;
  padding: 0 8px;
  padding-top: 1px;
  margin-left: 10px;
  background: #023c4a;
  border-radius: 5px;
  color: #00a59b;
`
export const ShortIntro = styled.div`
  color: ${theme('comment.floor')};
  font-size: 13px;
  opacity: 0.8;
  margin-top: 1px;
`
export const FloorNum = styled.div`
  color: ${theme('comment.floor')};
  font-size: 12px;
  letter-spacing: 1.5px;
  margin-top: 2px;
  opacity: 0.6;

  ${CommentBlock}:hover & {
    opacity: 0.8;
  }

  transition: opacity 0.25s;
`
export const CreateDate = styled.div`
  color: ${theme('comment.floor')};
  font-size: 12px;
  letter-spacing: 1.5px;
  margin-top: 2px;
  opacity: 0.8;
`
