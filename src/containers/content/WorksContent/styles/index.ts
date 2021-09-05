import styled from 'styled-components'

import type { TTestable, TMetric } from '@/spec'
import css from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable & { metric: TMetric }>`
  ${css.flexColumn('align-center')};
  width: 100%;
  min-height: 80vh;
  margin-top: 30px;
  ${({ metric }) => css.fitContentWidth(metric)};
`
export const LeftSidebarWrapper = styled.div`
  width: 140px;
  margin-top: 20px;
  margin-right: 10px;
`
export const ContentWrapper = styled.div`
  ${css.flex()};
  width: 100%;
  padding: 0;
`
export const MainContent = styled.div`
  flex-grow: 1;
  background: #022f39;
  padding: 10px 15px;
  border-radius: 5px;
`
export const PagiInfo = styled.div`
  ${css.flexColumn('align-both')};
`
export const PagiInfoTitle = styled.div`
  font-size: 12px;
  margin-top: -12px;
  margin-left: -12px;
  margin-bottom: 6px;
  letter-spacing: 1px;
`
