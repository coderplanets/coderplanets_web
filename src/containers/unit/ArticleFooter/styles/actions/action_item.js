import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex('align-center', 'justify-between')};
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
  margin-left: 20px;
  margin-bottom: 10px;
  cursor: pointer;
`
export const MainInfo = styled.div`
  position: relative;
  ${css.flex('align-end')};
`
export const IconBgWrapper = styled.div`
  background: #002a34;
  position: absolute;
  left: -28px;
  top: 3px;
`
export const ActionIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  width: 15px;
  height: 15px;
  display: block;
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
  ${css.circle('13px')};
  margin-bottom: 2px;
  margin-right: 10px;
`
export const AvatarFallback = styled.div`
  ${css.circle('14px')};
  ${css.flex('align-both')};
  color: ${theme('thread.articleTitle')};
  margin-bottom: 2px;
  margin-right: 10px;
  font-size: 10px;
  background: #074857;
`
export const UserName = styled(HighlightLink)`
  font-size: 12px;
  margin-right: 3px;
`
export const CommunityIcon = styled(Img)`
  width: 16px;
  height: 16px;
  display: block;
`
