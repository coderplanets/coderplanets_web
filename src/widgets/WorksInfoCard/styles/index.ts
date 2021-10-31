import styled from 'styled-components'

import type { TSpace } from '@/spec'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div``
export const Row = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 10px;
`
export const SlishSign = styled.div`
  color: ${theme('button.primary')};
  font-size: 10px;
  font-weight: bolder;
  font-family: monospace;
  margin-right: 6px;
`
export const Title = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
`
export const Divider = styled.div<TSpace>`
  margin-top: ${({ top }) => `${top}px`};
  margin-bottom: ${({ bottom }) => `${bottom}px`};
  width: 100%;
  height: 1px;
  background-color: ${theme('thread.articleDigest')};
  opacity: 0.2;
`
