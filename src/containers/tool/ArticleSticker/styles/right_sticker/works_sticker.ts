import styled from 'styled-components'

import type { TActive } from '@/spec'
import { theme } from '@/utils/css'

export const Wrapper = styled.div<TActive>`
  background: #0a313e;
  display: ${({ show }) => (show ? 'block' : 'none')};
  color: ${theme('thread.articleDigest')};
  width: 100%;
  min-height: 400px;
  border-radius: 8px;
  justify-content: center;
  border: 1px solid;
  border-color: #004250;
  padding: 20px 12px;
  padding-right: 20px 10px;
  /* sticker 的宽度是 260, 偏移后使视觉居中 */
  margin-right: -175px;
  margin-top: -38px;
`

export const holder = 1
