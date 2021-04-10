import styled from 'styled-components'

import { theme, css } from '@/utils'

// min-height: 300px;
export const ListsContainer = styled.div`
  ${css.flexColumn('')};
  border-radius: 4px;
`
export const TotalHeader = styled.div`
  ${css.flex('align-center')};
  margin-top: 25px;
  margin-bottom: 10px;

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
export const ListTitle = styled.div`
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

export const TopStatesWrapper = styled.div`
  ${css.flex('align-center')};
`
export const PinState = styled.div`
  font-size: 12px;
`
// date divider
export const DateDivider = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleDigest')};
  padding-bottom: 10px;
`
export const SlashSign = styled.div`
  font-size: 10px;
  font-weight: bolder;
  font-family: cursive;
  margin-right: 10px;
  margin-left: 6px;
  opacity: 0.8;
`
export const DateText = styled.div`
  font-size: 12px;
  opacity: 0.8;
`
