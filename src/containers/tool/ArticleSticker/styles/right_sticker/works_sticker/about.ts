import styled from 'styled-components'

import type { TActive } from '@/spec'
import { css, theme } from '@/utils'
import Img from '@/Img'

export const Wrapper = styled.div<TActive>`
  ${css.flexColumn()};
  color: ${theme('thread.articleDigest')};
  margin-bottom: 15px;
`
export const Row = styled.div`
  ${css.flex('align-center')};
`
export const LinkIcon = styled(Img)`
  ${css.size(13)};
  fill: ${theme('thread.articleDigest')};
  margin-right: 6px;
  margin-top: 2px;
`
export const LinkAddr = styled.a`
  display: block;
  color: #139c9e;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #139c9e;
  }
`
export const SocialWrapper = styled.div`
  ${css.flex('align-center')};
  flex-wrap: wrap;
  margin-left: -4px;
`
export const SocialItem = styled.div`
  ${css.flex('align-center')};
  padding: 1px 5px;
  background: #00333e;
  color: ${theme('thread.articleTitle')};
  margin-top: 8px;
  margin-right: 6px;
  border-radius: 5px;
`
export const SocialIcon = styled(LinkIcon)`
  cursor: pointer;
  ${SocialItem}:hover & {
    fill: ${theme('thread.articleTitle')};
  }
`
export const SocialName = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 13px;
  opacity: 0.9;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`
