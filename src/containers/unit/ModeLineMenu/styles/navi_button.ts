import styled from 'styled-components'

import { TTestable } from '@/spec'
import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn('align-both')};
  width: 68px;
  /* height: 74px; */
`
export const Icon = styled(Img)`
  fill: ${theme('thread.articleTitle')};
  ${css.circle(32)};
  padding: 8px;
  background: #023544;
`
export const Text = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 12px;
  margin-top: 4px;
`
