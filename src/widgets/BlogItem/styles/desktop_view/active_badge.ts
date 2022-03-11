import styled from 'styled-components'

import css, { theme } from '@/utils/css'
import { Main } from './index'

export const Wrapper = styled.div<{ hasComments: boolean }>`
  ${css.flex('align-center')};
  display: ${({ hasComments }) => (hasComments ? 'flex' : 'none')};
  position: absolute;
  top: 6px;
  right: 0;
  color: ${theme('thread.articleTitle')};
  margin-right: 1px;
  margin-top: 8px;

  ${Main}:hover & {
    color: ${theme('thread.articleTitle')};
  }
  transition: opacity 0.2s;
`
export const Hint = styled.div`
  color: ${theme('thread.articleTitle')};
  width: 200px;
`
