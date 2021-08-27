import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div``

export const Title = styled.div`
  display: inline;
  color: ${theme('thread.articleTitle')};
  font-size: 16px;
  ${css.media.mobile`
    ${css.cutRest('150px')};
  `};
`
export const ExtraInfo = styled.span`
  display: inline-block;
  margin-left: 8px;
`
export const CompanyLink = styled.a`
  font-size: 14px;
  color: #139c9e;
`
