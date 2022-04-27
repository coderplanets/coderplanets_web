import styled from 'styled-components'

import type { TTestable } from '@/spec'

import ViewSVG from '@/icons/View'
import CommentSVG from '@/icons/Comment'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flex('align-center')};
`
export const ViewsIcon = styled(ViewSVG)`
  fill: ${theme('thread.extraInfo')};
  ${css.size(13)};
  transition: fill 0.25s;
`
export const CommentWrapper = styled.div`
  ${css.flex('align-center')};
`
export const CommentIcon = styled(CommentSVG)`
  fill: ${theme('thread.extraInfo')};
  ${css.size(12)};
  transition: fill 0.25s;

  ${CommentWrapper}:hover & {
    cursor: pointer;
    fill: ${theme('thread.articleTitle')};
  }

  transition: fill 0.2s;
`
export const Count = styled.div`
  color: ${theme('thread.extraInfo')};
  font-size: 15px;
  margin-left: 6px;
  margin-top: 1px;
`
export const CommentCount = styled(Count)`
  margin-left: 8px;
  ${CommentWrapper}:hover & {
    cursor: pointer;
    color: ${theme('thread.articleTitle')};
  }
  transition: color 0.2s;
`
