import styled from 'styled-components'

import { theme, css } from '@/utils'
import Img from '@/Img'

export const Wrapper = styled.div`
  min-height: 100px;
  margin-left: 35%;
  padding-bottom: 0;
  width: 65%;
  max-width: 200px;
  flex-wrap: wrap;
  visibility: ${({ show }) => (show ? 'visiable' : 'hidden')};
`
export const Title = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 13px;
  margin-bottom: 15px;
`
export const JoinCount = styled.span`
  color: ${theme('comment.number')};
  font-size: 13px;
  margin-left: 4px;
  margin-right: 4px;
`
export const UsersWrapper = styled.div`
  ${css.flex()};
  flex-wrap: wrap;
`
export const Avatar = styled(Img)`
  ${css.circle(20)};
  margin-right: 6px;
  margin-bottom: 10px;
  opacity: 0.8;
`
export const PopInfo = styled.div`
  padding: 5px 10px;
  color: ${theme('thread.articleTitle')};
`
export const MoreUserWrapper = styled.div`
  ${css.circle(20)};
  ${css.flex('align-both')};
  background: #0f4251;
`
export const MoreIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  width: 12px;
  height: 12px;
  display: block;
`
export const Divider = styled.div`
  width: 90%;
  height: 1px;
  background: #0f4251;
  margin-top: 12px;
  margin-bottom: 12px;
`
