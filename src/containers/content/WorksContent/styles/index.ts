import styled from 'styled-components'

import { css } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testid,
}))`
  ${css.flexColumn('align-center')};
  width: 100%;
  min-height: 80vh;
  margin-top: 30px;
  ${({ metric }) => css.fitContentWidth(metric)};
`
export const LeftSidebarWrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testid,
}))`
  width: 182px;
`
export const ContentWrapper = styled.div`
  ${css.flex()};
  width: 100%;
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
