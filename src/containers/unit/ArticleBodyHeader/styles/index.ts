import styled from 'styled-components'

import Img from '@/Img'
import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex('justify-between', 'align-center')};
  width: 100%;
`
export const LinkSource = styled.div`
  &:hover {
    color: ${theme('article.linkHover')};
    cursor: pointer;
  }
`
export const MoreWrapper = styled.div`
  ${css.flex()};
  cursor: pointer;
`
export const MoreIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(15)};
  &:hover {
    fill: ${theme('thread.articleTitle')};
  }
`
export const LinkFrom = styled.a`
  ${css.flex()};
  color: ${theme('article.link')};
  margin-left: 5%;
  font-size: 0.9rem;
  margin-top: -2px;
  margin-left: -10px;
  &:hover {
    cursor: pointer;
    color: ${theme('thread.extraInfo')};
    text-decoration: underline;
  }
`
