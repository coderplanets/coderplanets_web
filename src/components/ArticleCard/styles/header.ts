import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div``

export const Title = styled.div`
  display: inline;
  color: ${theme('thread.articleTitle')};
  font-size: 17px;
  cursor: pointer;
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
