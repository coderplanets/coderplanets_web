import styled from 'styled-components'

import type { TTestable, TSpace } from '@/spec'
import { animate } from '@/utils/css'

export type TWrapper = TTestable &
  TSpace & {
    height: number
    duration: number
  }

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TWrapper>`
  background-color: #139c9e;

  height: ${({ height }) => `${height}px`};

  margin-top: ${({ top }) => `${top}px`};
  margin-left: ${({ left }) => `${left}px`};
  margin-right: ${({ right }) => `${right}px`};

  width: 1px;

  opacity: 1;
  animation: ${animate.blink} 2s linear infinite alternate;

  animation-duration: ${({ duration }) => `${duration}s`};
`

export const Title = styled.div``
