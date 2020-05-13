import styled from 'styled-components'

import { cs, theme } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
  width: 100%;
  color: ${theme('thread.articleTitle')};
`
export const Block = styled.div`
  ${cs.flex('align-start')};
  color: ${theme('thread.articleDigest')};
  height: auto;
  padding-bottom: 0;

  &:hover {
    /* background: #0b333e; */
  }
  transition: background 0.25s;
`
