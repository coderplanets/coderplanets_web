import styled from 'styled-components'

import type { TActive } from '@/spec'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div<TActive>`
  ${css.flexColumn()};
  color: ${theme('thread.articleDigest')};
`
export const Item = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 6px;
`
export const Label = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
  margin-right: 6px;
`
export const Value = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 14px;
  margin-right: 10px;
`
