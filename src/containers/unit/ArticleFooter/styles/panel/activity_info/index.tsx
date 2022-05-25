import styled from 'styled-components'

import type { TActive } from '@/spec'
import css, { theme } from '@/utils/css'

import EditPenSVG from '@/icons/Calendar'
import CommentSVG from '@/icons/Comment'
import UpdateTimeSVG from '@/icons/UpdateTime'

export const Wrapper = styled.div`
  ${css.flexColumn()};
`
export const Item = styled.div`
  ${css.flex('align-center')};
  color: ${theme('lightText')};
  font-size: 12px;
  margin-bottom: 12px;
  margin-left: 3px;
`
export const Label = styled.div`
  margin-right: 25px;
`
export const EditPenIcon = styled(EditPenSVG)`
  ${css.size(12)};
  fill: ${theme('lightText')};
  margin-right: 9px;
`
export const UpdateTimeIcon = styled(UpdateTimeSVG)`
  ${css.size(13)};
  fill: ${theme('lightText')};
  margin-right: 9px;
  margin-left: -1px;
`

export const CommentIcon = styled(CommentSVG)`
  ${css.size(10)};
  fill: ${theme('lightText')};
  margin-right: 10px;
  opacity: 0.8;
`

export const Content = styled.div``
export const Highlight = styled.span`
  color: ${theme('thread.articleTitle')};
`

export const ReferNum = styled.span`
  font-size: 13px;
  font-weight: bold;
  color: #00a59b;
  margin-right: 5px;
`
export const Text = styled.div<TActive>`
  color: ${({ active }) =>
    active ? theme('thread.articleTitle') : theme('thread.extraInfo')};
  font-size: 13px;

  ${Item}:hover & {
    color: ${theme('thread.articleTitle')};
  }

  transition: color 0.25s;
`
export const PanelWrapper = styled.div`
  ${css.flexColumn()};
  position: relative;
  border-top: 1px solid;
  border-top-color: #00424f;
`
export const PanelInnerWrapper = styled.div`
  height: 100%;
  border-left: 1px solid;
  border-left-color: #00424f;
  padding: 25px 0;
  padding-right: 25px;
  margin-left: 18px;
  min-height: 120px;
`
