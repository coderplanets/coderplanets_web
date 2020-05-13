import styled from 'styled-components'

import { cs } from '@/utils'

export const Wrapper = styled.div.attrs(props => ({
  'data-testid': props.testid,
}))`
  ${cs.flexColumn()};
  min-height: 100vh;
  margin-bottom: 100px;
`
export const ContentWrapper = styled.div`
  ${cs.flex()};
  padding: 0 7vw;
`
export const InnerContent = styled.div`
  flex-grow: 1;
  margin-bottom: 20px;
`
export const PagiInfo = styled.div`
  ${cs.flexColumn('align-both')};
`
export const PagiInfoTitle = styled.div`
  font-size: 12px;
  margin-top: -12px;
  margin-left: -12px;
  margin-bottom: 6px;
  letter-spacing: 1px;
`
