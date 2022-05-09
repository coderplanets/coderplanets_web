import styled from 'styled-components'

import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-center', 'justify-between')};
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
  margin-bottom: 10px;
  cursor: pointer;
`
export const MainInfo = styled.div`
  position: relative;
  ${css.flex('align-end')};
`
export const IconBgWrapper = styled.div`
  ${css.circle(18)};
  ${css.flex('align-both')};
  background: ${theme('hoverBg')};
  margin-right: 10px;
`
export const ActionIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(15)};
`
const HighlightLink = styled.a`
  color: ${theme('thread.articleTitle')};
  &:hover {
    color: ${theme('thread.articleTitle')};
    text-decoration: underline;
    text-decoration-color: ${theme('thread.articleDigest')};
  }
`
export const ArticleTitle = styled(HighlightLink)`
  font-size: 13px;
  margin-left: 2px;
  margin-right: 4px;
`
export const AvatarIcon = styled(Img)`
  ${css.circle(13)};
  margin-bottom: 2px;
  margin-right: 10px;
`
export const UserName = styled(HighlightLink)`
  font-size: 12px;
  margin-right: 3px;
`
