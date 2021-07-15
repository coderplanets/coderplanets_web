import styled from 'styled-components'

import type { TTestable } from '@/spec'
import { css } from '@/utils'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.size(30)};
  ${css.flex('align-both')};
`
export const holder = 1
