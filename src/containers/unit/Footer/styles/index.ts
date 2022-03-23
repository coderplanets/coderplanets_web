import styled from 'styled-components'
import { includes } from 'ramda'

import type { TTestable, TC11NLayout, TMetric } from '@/spec'
import { C11N, METRIC } from '@/constant'
import css, { theme } from '@/utils/css'

type TWrapper = TTestable & { metric: TMetric; layout: TC11NLayout }
export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TWrapper>`
  ${css.flex('justify-center')};
  justify-content: ${({ metric }) =>
    includes(metric, [METRIC.ARTICLE, METRIC.WORKS_ARTICLE])
      ? 'start'
      : 'center'};
  margin-top: ${({ layout }) => (layout === C11N.HOLY_GRAIL ? '30px' : '50px')};
  ${({ metric }) => css.fitPageWidth(metric)};
  padding-top: 20px;
  background: ${theme('textBadge')}; ;
`
export const Holder = 1
