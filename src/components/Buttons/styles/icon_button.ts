import styled from 'styled-components'

import type { TActive, TSpace } from '@/spec'

import Img from '@/Img'
import { css, theme } from '@/utils'

import type { TProps as TIconButtonProps } from '../IconButton'

type TWrapper = Omit<TIconButtonProps, 'path'>
export const Wrapper = styled.div<TWrapper>`
  ${css.flex('align-both')};
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};

  margin-left: ${({ mLeft }) => `${mLeft}px`};
  margin-right: ${({ mRight }) => `${mRight}px`};
  margin-top: ${({ mTop }) => `${mTop}px`};
  margin-bottom: ${({ mBottom }) => `${mBottom}px`};
`
type TIcon = { size: number; dimWhenIdle: boolean } & TSpace & TActive
export const Icon = styled(Img)<TIcon>`
  fill: ${({ $active }) =>
    $active ? '#00a59b' : theme('thread.articleDigest')};
  display: block;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};

  opacity: ${({ dimWhenIdle }) => (dimWhenIdle ? 0.7 : 1)};

  &:hover {
    fill: #00a59b;
    opacity: 1;
    cursor: pointer;
  }

  transition: fill 0.2s;
`

export const Hint = styled.div`
  color: ${theme('thread.articleDigest')};
  text-align: center;
  min-width: 80px;
  padding: 5px;
`
