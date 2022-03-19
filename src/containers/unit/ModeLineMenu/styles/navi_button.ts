import styled from 'styled-components'

import type { TTestable } from '@/spec'
import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn('align-both')};
  width: 68px;
  position: relative;
  /* height: 74px; */
`
export const Icon = styled(Img)<{ type: string }>`
  fill: ${theme('thread.articleTitle')};
  ${css.circle(32)};
  padding: 8px;
  padding: ${({ type }) => (type === 'avatar' ? '2px' : '8px')};
  background: #023544;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 12px;
  margin-top: 8px;
  ${css.cutRest('80px')};
`

export const Desc = styled.div`
  position: absolute;
  bottom: -18px;
  color: ${theme('thread.articleDigest')};
  opacity: 0.8;
  font-size: 12px;
  ${css.cutRest('80px')};
`
