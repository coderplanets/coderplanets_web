import styled from 'styled-components'

import type { TSIZE_SML } from '@/spec'
import { SIZE } from '@/constant'
import { theme } from '@/utils'

export const Wrapper = styled.div<{ size: TSIZE_SML }>`
  color: ${theme('thread.articleTitle')};
  font-size: ${({ size }) => (size === SIZE.SMALL ? '15px' : '23px')};
  overflow-y: hidden;
`
export const holder = 1
