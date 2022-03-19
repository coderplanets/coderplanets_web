import styled from 'styled-components'

import type { TTestable, TMetric } from '@/spec'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flex('justify-center')};
  width: 100%;
  color: ${theme('thread.articleDigest')};
  margin-top: 30px;
`
export const InnerWrapper = styled.div<{ metric: TMetric }>`
  ${css.flexColumn('align-center')};
  width: 100%;
  min-height: 80vh;
  ${({ metric }) => css.fitContentWidth(metric)};
`
