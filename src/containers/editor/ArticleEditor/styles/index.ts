import styled from 'styled-components'

import type { TTestable, TMetric } from '@/spec'
import css from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flex('justify-center')};
  width: 100%;
  margin-top: 40px;
`
export const InnerWrapper = styled.div<{ metric: TMetric }>`
  ${css.flex('justify-between')};
  width: 100%;
  margin-top: 30px;
  ${({ metric }) => css.fitContentWidth(metric)};
`
export const ContentWrapper = styled.div`
  /* min-height: 40vh; */
`
export const Footer = styled.div`
  ${css.flex('align-center', 'justify-end')};
  width: 100%;
  border-top: 2px solid;
  border-top-color: #03343f;
  margin-top: 35px;
  margin-bottom: 40px;
  padding-top: 20px;
`
