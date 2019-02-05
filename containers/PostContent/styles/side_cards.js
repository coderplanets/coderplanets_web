import styled from 'styled-components'

import { cs } from 'utils'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
  width: 90%;
  ${cs.media.mobile`display: none`};
  ${cs.media.tablet`display: none`};
`
export const ReportWrapper = styled.div`
  padding: 0 10px;
`
