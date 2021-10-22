import styled from 'styled-components'

import type { TSpace } from '@/spec'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div<TSpace>`
  ${css.flex('align-end')};
  margin-left: ${({ left }) => `${left}px` || 0};
  margin-right: ${({ right }) => `${right}px` || 0};
  margin-top: ${({ top }) => `${top || 0}px`};
  margin-bottom: ${({ bottom }) => `${bottom || 0}px`};
`

export const Hint = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
  opacity: 0.8;
`
export const Main = styled.div`
  ${css.flex('align-end')};
  margin-left: 4px;
  margin-right: 4px;
`
export const CurNum = styled.div<{ invalid: boolean }>`
  color: ${({ invalid }) =>
    invalid ? theme('baseColor.red') : theme('thread.articleTitle')};
  font-size: 14px;
`
export const Slash = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 10px;
  margin-left: 6px;
  margin-right: 5px;
  margin-bottom: 2px;
`
export const TotalNum = styled.div`
  font-size: 12px;
  color: ${theme('thread.articleDigest')};
`
