import styled from 'styled-components'

import { css } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${css.flexColumn()};
  min-height: 80vh;
  margin-top: 30px;
  padding: 0 7vw;
`
export const LeftSidebarWrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  width: 190px;
`
export const ContentWrapper = styled.div`
  ${css.flex()};
`
export const InnerContent = styled.div`
  flex-grow: 1;
  margin-bottom: 20px;
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
