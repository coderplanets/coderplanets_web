import styled from 'styled-components'

import type { TSize, TActive } from '@/spec'

import { getFontSize, getCountColor } from './metric'

type TWrapper = { size: TSize; count: number } & TActive

export const Wrapper = styled.div<TWrapper>`
  color: ${({ $active, count }) => getCountColor($active, count)};
  font-size: ${({ size }) => getFontSize(size)};
  font-weight: ${({ count }) => (count > 0 ? 'bold' : 400)};
  opacity: ${({ count }) => (count === 0 ? 0.8 : 1)};
  overflow-y: hidden;
`
export const holder = 1
