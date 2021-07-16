import styled from 'styled-components'

import { theme, css } from '@/utils'
import { Main } from './index'

export const Wrapper = styled.div<{ hasComments: boolean }>`
  ${css.flex('align-center')};
  display: ${({ hasComments }) => (hasComments ? 'flex' : 'none')};
  position: absolute;
  top: 6px;
  right: 0;
  color: ${theme('thread.articleDigest')};
  margin-right: 6px;
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
