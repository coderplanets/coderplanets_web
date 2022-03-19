import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css, { theme } from '@/utils/css'

import type { TAvatarProps } from '../index'
import { getFontSize } from './metric/avatar'

type TWrapper = TTestable & TAvatarProps

export const Wrapper = styled.div.attrs(({ testid }: TWrapper) => ({
  'data-test-id': testid,
}))<TWrapper>`
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
