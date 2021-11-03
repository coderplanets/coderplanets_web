import styled from 'styled-components'

import { theme } from '@/utils/themes'
import Img from '@/Img'
import css from '@/utils/css'

export const Wrapper = styled.div``

export const LinkWraper = styled.div`
  ${css.flex('align-center')};
`
export const LinkIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(14)};
`
export const LinkSrc = styled.a`
  ${css.cutRest('240px')};
  font-size: 13px;
  color: ${theme('thread.articleDigest')};
  opacity: 0.8;
  margin-left: 6px;

  &:hover {
    text-decoration: underline;
    color: ${theme('thread.articleDigest')};
    opacity: 1;
    cursor: pointer;
  }
`
export const Title = styled.a`
  display: inline;
  color: ${theme('thread.articleTitle')};
  font-size: 17px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: ${theme('thread.articleTitle')};
  }

  ${css.media.mobile`
    ${css.cutRest('150px')};
  `};
`
export const ExtraInfo = styled.span`
  display: inline-block;
  margin-right: 8px;
`
export const CompanyLink = styled.a`
  font-size: 16px;
  color: #139c9e;

  &:after {
    content: '';
    ${css.circle(4)};
    display: inline-block;
    background: ${theme('thread.articleDigest')};
    margin-bottom: 3px;
    margin-left: 8px;
  }

  &:hover {
    cursor: pointer;
    color: #139c9e;
    text-decoration: underline;
  }
`
