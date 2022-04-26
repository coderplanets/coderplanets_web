import styled from 'styled-components'
import { includes } from 'ramda'

import type { TTestable, TMetric } from '@/spec'
import { METRIC } from '@/constant'
import css from '@/utils/css'

type TWrapper = TTestable & { metric: TMetric }
export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TWrapper>`
  ${css.flex('justify-center')};
  justify-content: ${({ metric }) =>
    includes(metric, [METRIC.ARTICLE, METRIC.WORKS_ARTICLE])
      ? 'start'
      : 'center'};
  margin-top: 50px;
  ${({ metric }) => css.fitPageWidth(metric)};
  padding: 30px 0;
`
export const Holder = 1
