import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  width: 100%;
  color: ${theme('thread.articleTitle')};
`
export const Block = styled.div`
  ${css.flex('align-start')};
  color: ${theme('thread.articleDigest')};
  height: auto;
  padding-bottom: 0;

  &:hover {
    /* background: #0b333e; */
  }
  transition: background 0.25s;
`
