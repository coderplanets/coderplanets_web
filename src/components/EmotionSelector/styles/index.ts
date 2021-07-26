import styled from 'styled-components'

import type { TTestable } from '@/spec'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flex('align-center')};
  /* background: #043642; */
  padding: 3px 6px;
  padding-right: 0;
  border-radius: 8px;
  margin-left: -4px;
`
export const holder = 1
