import styled from 'styled-components'

import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

import { Wrapper as CommentBlock } from './desktop_view'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 15px;
`
export const Avatar = styled(Img)<{ avatarSize: number }>`
  ${({ avatarSize }) => css.circle(avatarSize)};
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
export const UserBase = styled.div`
  ${css.flex('align-end')};
  font-size: 15px;
  flex-grow: 1;
`
export const Nickname = styled.div`
  font-size: 15px;
`
export const AuthorTag = styled.div`
  font-size: 11px;
  margin-bottom: 2px;
  padding: 0 8px;
  margin-left: 10px;
  background: #023c4a;
  border-radius: 5px;
  color: #00a59b;
`
export const ShortIntro = styled.div`
  color: ${theme('comment.floor')};
  ${css.cutRest('280px')};
  font-size: 13px;
  opacity: 0.8;
  margin-top: 1px;
`
export const FloorNum = styled.div`
  color: ${theme('comment.floor')};
  font-size: 13px;
  margin-top: 2px;
  opacity: 0.6;

  ${CommentBlock}:hover & {
    opacity: 0.8;
  }

  transition: opacity 0.25s;
`
export const CreateDate = styled.div`
  ${css.flex('align-center')};
  color: ${theme('comment.floor')};
  font-size: 12px;
  margin-left: 2px;
  opacity: 0.8;
`
