import styled from 'styled-components'

import Img from '@/Img'
import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  padding: 20px;
  padding-top: 30px;
`
export const Title = styled.div`
  font-size: 1rem;
  color: ${theme('thread.articleTitle')};
`
export const IconsWrapper = styled.div`
  ${css.flex('justify-around')};
  margin-top: 20px;
  background: ${theme('bodyBg')};
  padding: 20px 12px;
`
export const Site = styled.div`
  ${css.flex('')};
`
export const SiteIcon = styled(Img)`
  ${css.size(40)};
  margin-right: 10px;
`

export const SiteInfo = styled.div`
  ${css.flexColumn()};
`
export const SiteTitle = styled.div`
  color: ${theme('thread.articleTitle')};
`
export const SiteLink = styled.a`
  text-decoration: underline;
  color: ${theme('thread.articleDigest')};
  transition: color 0.3s;
  &:hover {
    text-decoration: underline;
    color: ${theme('banner.title')};
  }
`
export const Footer = styled.div`
  color: ${theme('thread.articleDigest')};
  margin-top: 80px;
`
