import styled from 'styled-components'

import type { TTestable, TC11NLayout, TMetric } from '@/spec'
import { C11N, METRIC } from '@/constant'
import { css } from '@/utils'

type TWrapper = TTestable & { metric: TMetric; layout: TC11NLayout }
export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TWrapper>`
  ${css.flex('justify-center')};
  justify-content: ${({ metric }) =>
    metric === METRIC.WORKS_ARTICLE ? 'start' : 'center'};
  margin-top: ${({ layout }) => (layout === C11N.HOLY_GRAIL ? '50px' : '80px')};
  ${({ metric }) => css.fitPageWidth(metric)};
`
export const Holder = 1
