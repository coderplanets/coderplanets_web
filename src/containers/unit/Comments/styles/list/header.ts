import styled from 'styled-components'

import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  margin-top: 25px;
  margin-bottom: 20px;

  ${css.media.mobile`
    border-bottom: 1px solid;
    border-bottom-color: #0b4252;
    padding-bottom: 10px;
    margin-bottom: 20px;
  `};
`
export const TotalCountWrapper = styled.div`
  flex-grow: 1;
`
export const TotalTitle = styled.div`
  color: ${theme('comment.title')};
  font-size: 14px;
  margin-left: 2px;

  ${css.media.mobile`
    font-size: 13px;
    margin-left: 0;
    padding-left: 5px;
  `};
`
export const TotalNum = styled.span`
  color: ${theme('comment.number')};
  font-size: 17px;
  margin-left: 2px;
  margin-right: 2px;
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
