import styled from 'styled-components'

import type { TTestable, TMetric } from '@/spec'
import css from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn('align-center')};
  width: 100%;
  min-height: 80vh;
`
export const ContentWrapper = styled.div<{ metric: TMetric }>`
  ${css.flex('justify-center')};
  ${({ metric }) => css.fitContentWidth(metric)};
  width: 100%;
  margin-top: 20px;
`
export const CoverWrapper = styled.div`
  ${css.flex()};
  flex-wrap: wrap;
  padding: 80px 30px;
  padding-right: 10px;
`
