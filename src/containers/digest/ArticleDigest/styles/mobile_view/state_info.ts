import styled from 'styled-components'

import Img from '@/Img'
import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex('justify-between')};
  margin-top: 12px;
`
export const Section = styled.div`
  ${css.flex('align-center')};
`
export const Item = styled.div`
  ${css.flex('align-center')};
`
export const Divider = styled.div`
  background-color: ${theme('thread.articleDigest')};
  height: 10px;
  width: 1px;
  opacity: 0.6;
  margin-left: 10px;
  margin-right: 10px;
`
export const ViewsText = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 13px;
  margin-left: 5px;
`
export const Text = styled(ViewsText)`
  cursor: pointer;
`
const Icon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(14)};
`
export const ViewdIcon = styled(Icon)``
export const CommentIcon = styled(Icon)``
export const LikeIcon = styled(Icon)<{ red: boolean }>`
  fill: ${({ red }) =>
    red ? theme('baseColor.red') : theme('thread.articleDigest')};
  ${css.size(12)};
`
export const AuthorWrapper = styled.div`
  ${css.flex('align-center')};
`
export const Avatar = styled(Img)`
  ${css.circle(14)};
`
export const Nickname = styled.div`
  font-size: 12px;
  color: ${theme('thread.articleDigest')};
  margin-left: 6px;
`
