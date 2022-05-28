import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import EditPenSVG from '@/icons/Calendar'
import CommentSVG from '@/icons/Comment'
import UpdateTimeSVG from '@/icons/UpdateTime'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  position: relative;
  width: 100%;
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
export const HelpHint = styled.div`
  position: absolute;
  right: 8px;
  top: -1px;
  font-size: 11px;
  color: ${theme('lightText')};
  opacity: 0.8;

  &:hover {
    color: ${theme('thread.articleTitle')};
    opacity: 1;
    cursor: pointer;
  }

  transition: color 0.2s;
`
