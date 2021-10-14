import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-end')};
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
`
