import styled from 'styled-components'

import type { TTestable, TMetric } from '@/spec'
import css from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flex('justify-center')};
  width: 100%;
`
export const InnerWrapper = styled.div<{ metric: TMetric }>`
  ${css.flex()};
  margin-top: 40px;
  ${({ metric }) => css.fitContentWidth(metric)};
`
export const ContentWrapper = styled.div`
  ${css.flex()};
  align-content: start;
  flex-wrap: wrap;
  width: 100%;
`
export const CardsWrapper = styled.div`
  ${css.flex('align-center')};
  flex-wrap: wrap;
  width: 100%;
  min-height: 50vh;
  margin-top: 12px;
`
