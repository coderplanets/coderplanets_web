import styled from 'styled-components'

import type { TTestable, TSpace } from '@/spec'
import { css, theme } from '@/utils'
import { getFontSize } from './metric/avatar'

type IWrapper = TSpace & {
  size: string
  quote: string
}

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable & IWrapper>`
  ${css.flex('align-both')};
  color: ${theme('thread.articleTitle')};
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  background: ${theme('avatar.fallbackBg')};
  border-radius: 100%;

  margin-top: ${({ top }) => `${top}px`};
  margin-bottom: ${({ bottom }) => `${bottom}px`};
  margin-left: ${({ left }) => `${left}px`};
  margin-right: ${({ right }) => `${right}px`};

  border: ${({ quote }) => (quote ? '2px solid' : 'none')};
  border-color: ${({ quote }) => (quote ? theme('avatar.quote') : 'none')};
`
export const Name = styled.div<{ size: number }>`
  font-family: 'Audiowide', cursive;
  font-size: ${({ size }) => getFontSize(size)};
`
