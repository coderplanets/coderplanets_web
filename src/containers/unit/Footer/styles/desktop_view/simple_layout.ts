import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn('align-both')};
  width: 100%;
`
export const Note = styled.div`
  font-size: 13.5px;
  color: ${theme('thread.articleDigest')};
  margin-bottom: 5px;
`

export const Addr = styled.a`
  color: ${theme('thread.articleDigest')};
  text-decoration: none;
  margin-left: 2px;
  margin-right: 2px;

  &:hover {
    color: ${theme('thread.articleTitle')};
  }

  transition: all 0.2s;
`
