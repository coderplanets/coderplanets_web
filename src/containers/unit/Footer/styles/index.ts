import styled from 'styled-components'

import type { TTestable, TC11NLayout } from '@/spec'
import { C11N } from '@/constant'
import { css } from '@/utils'

type TWrapper = TTestable & { metric: string; layout: TC11NLayout }
export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TWrapper>`
  ${css.flex('justify-center')};
  margin-top: ${({ layout }) => (layout === C11N.HOLY_GRAIL ? '50px' : '80px')};
  ${({ metric }) => css.fitPageWidth(metric)};
`
export const Holder = 1
