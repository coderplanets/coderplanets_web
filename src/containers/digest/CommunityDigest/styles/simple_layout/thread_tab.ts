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
  font-size: ${({ $active }) => ($active ? '16px' : '15px')};
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  margin-top: ${({ $active }) => ($active ? 0 : '1px')};
  margin-right: 35px;

  &:hover {
    color: ${theme('thread.articleTitle')};
    cursor: pointer;
  }

  transition: all 0.2s;
`
