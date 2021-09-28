import styled from 'styled-components'

import type { TSpace } from '@/spec'
import css from '@/utils/css'
import { theme } from '@/utils/themes'

export const Wrapper = styled.div<TSpace>`
  ${css.flex('align-center')};
  margin-left: ${({ left }) => `${left}px` || 0};
  margin-bottom: ${({ bottom }) => `${bottom}px` || 0};
`
export const Title = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 16px;
  margin-right: 4px;
`
