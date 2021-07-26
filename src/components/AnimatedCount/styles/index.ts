import styled from 'styled-components'

import type { TSIZE, TActive } from '@/spec'
import { theme } from '@/utils'

import { getFontSize } from './metric'

type TWrapper = { size: TSIZE } & TActive

export const Wrapper = styled.div<TWrapper>`
  color: ${({ $active }) =>
    $active ? '#139C9E' : theme('thread.articleTitle')};
  font-size: ${({ size }) => getFontSize(size)};
  font-weight: ${({ $active }) => ($active ? 'bold' : 'normal')};
  overflow-y: hidden;
`
export const holder = 1
