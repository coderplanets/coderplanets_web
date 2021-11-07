import styled from 'styled-components'

import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

import { Wrapper as CommentBlock } from '../desktop_view'

export const Avatar = styled(Img)<{ avatarSize: number }>`
  ${({ avatarSize }) => css.circle(avatarSize)};
  opacity: ${theme('avatar.opacity')};
  margin-right: 13px;
`
export const HeaderBaseInfo = styled.div`
  ${css.flexColumn()};
  width: 100%;
  margin-left: 5px;
`
export const BaseInfo = styled.div`
  ${css.flexGrow('align-center')};
  color: ${theme('comment.username')};
`
export const ArticleBase = styled.div`
  ${css.flex('align-center')};
  flex-grow: 1;
`
export const AuthorTitle = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 15px;
  ${css.cutRest('300px')};
`
export const AuthorName = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 13px;
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
  opacity: 0.8;
  margin-top: 3px;
`
