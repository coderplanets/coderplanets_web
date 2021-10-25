import styled from 'styled-components'

import type { TSIZE, TActive } from '@/spec'

import { getFontSize, getCountColor } from './metric'

type TWrapper = { size: TSIZE; count: number } & TActive

export const Wrapper = styled.div<TWrapper>`
  color: ${({ $active, count }) => getCountColor($active, count)};
  font-size: ${({ size }) => getFontSize(size)};
  font-weight: ${({ $active }) => ($active ? 'bold' : 'normal')};
  overflow-y: hidden;
`
export const holder = 1
