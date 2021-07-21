import styled from 'styled-components'

import type { TActive } from '@/spec'
import { css, theme } from '@/utils'

export const Wrapper = styled.div<TActive>`
  ${css.flexColumn()};
  color: ${theme('thread.articleDigest')};
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 16px;
`
