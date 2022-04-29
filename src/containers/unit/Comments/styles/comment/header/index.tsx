import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import { Wrapper as CommentBlock } from '../desktop_view'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 15px;
  margin-left: 4px;
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
