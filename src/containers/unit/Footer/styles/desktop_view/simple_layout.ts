import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-both')};
  width: 100%;
`
export const Note = styled.div`
  font-size: 13px;
  color: ${theme('thread.articleDigest')};
  opacity: 0.8;
`

export const Addr = styled.a`
  color: ${theme('thread.articleDigest')};
  text-decoration: none;

  &:hover {
    color: ${theme('thread.articleTitle')};
  }

  transition: all 0.2s;
`
