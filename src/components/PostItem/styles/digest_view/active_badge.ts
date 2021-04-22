import styled from 'styled-components'

import { theme, css } from '@/utils'
import Img from '@/Img'

import { Main } from './index'

export const Wrapper = styled.div<{ hasComments: boolean }>`
  ${css.flex('align-center')};
  display: ${({ hasComments }) => (hasComments ? 'flex' : 'none')};
  position: absolute;
  top: 3px;
  right: 0;
  color: ${theme('thread.articleDigest')};
  margin-right: 6px;
  margin-top: 8px;
  opacity: 0.8;

  ${Main}:hover & {
    opacity: 0.9;
    color: ${theme('thread.articleTitle')};
  }
  transition: opacity 0.2s;
`
export const ItemInner = styled.div`
  ${css.flex('align-center')};
`
export const Icon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(12)};
  opacity: 0.6;
  margin-right: 3px;
`
