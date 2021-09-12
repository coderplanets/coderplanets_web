import styled from 'styled-components'

import type { TTestable } from '@/spec'
import { theme } from '@/utils/themes'
// import css from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>``

export const Body = styled.div<{ lineClampNum: number }>`
  font-size: 16px;
  line-height: 1.85;
  position: relative;
  display: -webkit-box;
  -webkit-line-clamp: ${({ lineClampNum }) => lineClampNum};

  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
`
export const HTML = styled.div`
  color: ${theme('thread.articleTitle')};
  opacity: 0.9;
`
