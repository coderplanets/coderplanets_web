import styled from 'styled-components'

import type { TActive } from '@/spec'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

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
export const Row = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 10px;
`
export const CommentSign = styled.div`
  margin-top: 1px;
  margin-right: 8px;
  margin-left: 3px;
  font-size: 11px;
  font-weight: 500;
  color: #0082c1;
  transform: rotate(12deg);
`
export const Title = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
`
