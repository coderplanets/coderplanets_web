import styled from 'styled-components'
import DotDivider from '@/widgets/DotDivider'

import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 0;
  margin-left: 5px;
`
export const Dot = styled(DotDivider)`
  background: ${theme('comment.floor')};
  opacity: 0.6;
`
export const FloorNum = styled.div`
  color: ${theme('comment.floor')};
  font-size: 12px;
  flex-grow: 1;
  letter-spacing: 1.5px;
  height: 15px;
  opacity: 0.8;
`
export const CommentHeaderFirst = styled.div`
  ${css.flex()};
`
export const Avatar = styled(Img)`
  ${css.circle(24)};
  opacity: ${theme('avatar.opacity')};
  margin-right: 14px;
  margin-top: 10px;
`
export const HeaderBaseInfo = styled.div`
  ${css.flexColumn()};
  width: 100%;
`
export const CommentUserName = styled.div`
  ${css.flexGrow('align-center')};
  color: ${theme('comment.username')};
  font-size: 14px;

  ${css.media.mobile`
    font-size: 13px;
  `};
`
export const ReplyUsers = styled.div`
  ${css.flex()};
  margin-top: -4px;
`
export const ReplyTitle = styled.div`
  color: ${theme('comment.reply')};
  margin-top: 4px;
  margin-right: 5px;
`
