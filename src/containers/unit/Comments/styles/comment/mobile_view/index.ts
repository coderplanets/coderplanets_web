import styled from 'styled-components'

import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex()};
  margin-bottom: 16px;
  padding-left: 0;
  padding-bottom: 16px;
  padding-top: 0;
  position: relative;
  /* box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04); */
  /* border-radius: 3px; */
  /* background: ${theme('comment.bg')}; */
  background: transparent;
  border-bottom: 1px solid;
  border-bottom-color: #0b4252;
`
// filter: blur(3px);
export const CommentWrapper = styled.div`
  width: 100%;
`
export const HeaderWrapper = styled.div`
  ${css.flex('align-center', 'justify-between')};
  width: 100%;
`
export const CommentBodyInfo = styled.div`
  ${css.flexColumn()};
  width: calc(100% - 60px);
  margin-left: 40px;
  margin-top: -20px;
`
export const CommentContent = styled.div`
  font-size: 14px;
`
export const LikeIcon = styled(Img)`
  fill: ${theme('comment.icon')};
  margin-right: 3px;
  margin-top: 2px;
  ${css.size(20)};
`
export const ReplyIcon = styled(Img)`
  fill: ${theme('comment.icon')};
  margin-right: 5px;
  margin-top: 1px;
  ${css.size(18)};
`

export const ReplyAction = styled.div`
  ${css.flex()};
  color: ${theme('comment.action')};
  margin-right: 12px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 2px;
  opacity: 0;

  ${CommentBodyInfo}:hover & {
    opacity: 1;
  }
  transition: opacity 0.3s;
`
