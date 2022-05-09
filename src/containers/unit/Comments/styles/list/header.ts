import styled from 'styled-components'

import css, { theme } from '@/utils/css'

import EditPenSVG from '@/icons/EditPen'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 5px;

  ${css.media.mobile`
    border-bottom: 1px solid;
    border-bottom-color: #0b4252;
    padding-bottom: 10px;
    margin-bottom: 20px;
    overflow: hidden;
  `};
`
export const TotalCountWrapper = styled.div`
  flex-grow: 1;
`
export const TotalTitle = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
  margin-left: 1px;

  ${css.media.mobile`
    font-size: 13px;
    margin-left: 0;
    padding-left: 5px;
  `};
`
export const TotalNum = styled.span<{ highlight: boolean }>`
  color: ${({ highlight }) =>
    highlight ? theme('comment.number') : theme('thread.articleTitle')};
  font-weight: bold;
  font-size: 17px;
  margin-left: 6px;
  margin-right: 6px;
`
export const CommentBlock = styled.div`
  ${css.flex()};
  margin-bottom: 16px;
  padding: 15px;
  padding-left: 20px;
  position: relative;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  border-radius: 3px;
  background: ${theme('drawer.articleBg')};
`
export const ActionsWrapper = styled.div`
  ${css.flex('align-center')};
`
export const EditIcon = styled(EditPenSVG)`
  ${css.size(12)};
  fill: white;
  margin-right: 5px;
`
