import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-both')};
  color: ${theme('thread.articleTitle')};
  font-size: 0.9rem;
`
export const LoginLabel = styled.div`
  font-size: 0.9rem;
  transition: color 0.3s;
  color: ${theme('banner.title')};
  margin-left: 3px;
  margin-right: 3px;

  &:hover {
    cursor: pointer;
    color: ${theme('thread.title')};
    text-decoration: underline;
  }
`
