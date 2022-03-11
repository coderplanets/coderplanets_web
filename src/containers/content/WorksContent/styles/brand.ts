import styled from 'styled-components'

import type { TTestable, TSpace } from '@/spec'
import css from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn()};
  margin-bottom: 28px;
  margin-top: 12px;
  padding: 0 5px;
`

export const Divider = styled.div<TSpace>`
  height: 1px;
  width: 100%;
  background: #004353;
  margin-top: 20px;
  opacity: 0.6;
`
