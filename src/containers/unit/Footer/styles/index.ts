import styled from 'styled-components'

import { TTestable } from '@/spec'
import { C11N } from '@/constant'
import { css } from '@/utils'

type TWrapper = TTestable & { metric: string; layout: string }
export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TWrapper>`
  ${css.flex('justify-center')};
  margin-top: ${({ layout }) => (layout === C11N.DIGEST_ROW ? '50px' : '80px')};
  ${({ metric }) => css.fitPageWidth(metric)};
`
export const Holder = 1
