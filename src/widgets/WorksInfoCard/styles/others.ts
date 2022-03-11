import styled from 'styled-components'

import type { TActive } from '@/spec'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div<TActive>`
  ${css.flexColumn()};
  color: ${theme('thread.articleDigest')};
`
export const Item = styled.div`
  ${css.flex('align-start')};
  margin-bottom: 6px;
`
export const Label = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 13px;
  margin-right: 8px;
  word-break: keep-all;
  margin-top: 2px;
`
export const ValueWrapper = styled.div`
  ${css.flex()};
  flex-wrap: wrap;
`
export const Value = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 14px;
  margin-right: 10px;
`
