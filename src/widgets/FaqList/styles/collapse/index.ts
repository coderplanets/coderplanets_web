import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  width: 55%;
  max-width: 55%;
  min-width: 550px;
  max-width: 550px;
`
export const Footer = styled.div`
  ${css.flex('align-both')};
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
  margin-top: 60px;
  margin-left: -50px;
`

export const MoreLink = styled.div`
  color: ${theme('link')};
  margin-left: 1px;

  &:hover {
    cursor: pointer;
  }

  transition: all 0.2s;
`
