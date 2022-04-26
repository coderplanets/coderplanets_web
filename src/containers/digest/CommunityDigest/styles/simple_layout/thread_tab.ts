import styled from 'styled-components'

import type { TActive } from '@/spec'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  margin-left: -10px;
`
export const Title = styled.div<TActive>`
  color: ${({ $active }) =>
    $active ? theme('thread.articleTitle') : theme('thread.articleDigest')};
  font-size: 15px;
  opacity: ${({ $active }) => ($active ? 1 : 0.9)};
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  margin-right: 35px;

  &:hover {
    color: ${theme('thread.articleTitle')};
    opacity: 1;
    cursor: pointer;
  }

  transition: all 0.2s;
`
