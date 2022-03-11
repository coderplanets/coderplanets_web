import styled from 'styled-components'

import type { TTestable, TMetric } from '@/spec'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn('align-both')}
  width: 100%;
  /* min-height: 100vh; */
  position: relative;
`
export const InnerWrapper = styled.div`
  ${css.flexColumn('align-both')}
  padding: 10px 0;
  margin-top: 12px;
  width: 100%;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 18px;
`
export const ContentWrapper = styled.div<{ metric: TMetric }>`
  ${css.flexColumn('align-center')};
  ${({ metric }) => css.fitContentWidth(metric)};
`
