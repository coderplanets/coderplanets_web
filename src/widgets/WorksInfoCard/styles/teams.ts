import styled from 'styled-components'

import type { TActive } from '@/spec'
import css, { theme } from '@/utils/css'

import Img from '@/Img'

export const Wrapper = styled.div<TActive>`
  ${css.flexColumn()};
  color: ${theme('thread.articleDigest')};
`
export const Member = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 10px;
`
export const Avatar = styled(Img)`
  ${css.circle(24)};
  margin-right: 12px;
`
export const Intro = styled.div`
  ${css.flexColumn()};
`
export const Name = styled.a`
  color: ${theme('thread.articleTitle')};
  text-decoration: none;
  font-size: 14px;

  &:hover {
    color: ${theme('thread.articleTitle')};
    text-decoration: underline;
  }
`
export const Bio = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 13px;
  ${css.cutRest('190px')};
`
